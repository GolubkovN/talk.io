import { Server as SocketServer } from "socket.io";
import { Server as HttpServer } from "http";
import { verifyToken } from "@clerk/express";

import { Message } from "../models/Message";
import { Chat } from "../models/Chat";
import { User } from "../models/User";
import { isValidObjectId } from "mongoose";


// store online users in memory: userId => socketId
export const onlineUsers: Map<string, Set<string>> = new Map();

export const initializeSocket = (server: HttpServer) => {
  const io = new SocketServer(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true,
    },
  });

  io.use(async (socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("Authentication error"));

    try {
      const session = await verifyToken(token, { secretKey: process.env.CLERK_SECRET_KEY });

      const clerkId = session.sub;
      const user = await User.findOne({ clerkId });
      if (!user) return next(new Error("User not found"));
      socket.data.userId = user._id.toString();
      next();
     
    } catch (error) {
      next(new Error(error instanceof Error ? error.message : "Authentication error from socket initialize"));
    }
  });

  io.on("connection", (socket) => {
    const userId = socket.data.userId;

    // send online users to the newly connected client
    socket.emit("online-users", { userIds: Array.from(onlineUsers.keys()) });
    const sockets = onlineUsers.get(userId) ?? new Set<string>();
    sockets.add(socket.id);
    onlineUsers.set(userId, sockets);
    // notify other clients that the user is online
    socket.broadcast.emit("user-online", { userId });

    socket.join(`user:${userId}`);

    socket.on("join-chat", async (chatId: string) => {
      try {
        if (!isValidObjectId(chatId)) {
          socket.emit("socket-error", { message: "Invalid chatId" });
          return;
        }
        const chat = await Chat.findOne({ _id: chatId, participants: userId }).select("_id");
        if (!chat) {
          socket.emit("socket-error", { message: "Chat not found" });
          return;
        }
        socket.join(`chat:${chatId}`);
      } catch {
        socket.emit("socket-error", { message: "Failed to join chat" });
      }
    });

    socket.on("leave-chat", (chatId: string) => {
      socket.leave(`chat:${chatId}`);
    });

    socket.on("send-message", async (data: { chatId: string, text: string }) => {
      try {
        const { chatId, text } = data;

         // validate text content
        if (!text || typeof text !== 'string' || !text.trim()) {
          socket.emit("socket-error", { message: "Message text is required" });
          return;
        }
        const trimmedText = text.trim();
        if (trimmedText.length > 5000) {
          socket.emit("socket-error", { message: "Message too long" });
          return;
        }
        // check if the chatId is valid
        if (!isValidObjectId(chatId)) {
          socket.emit("socket-error", { message: "Invalid chatId" });
          return;
        }

        // find the chat by id and check if the user is a participant
        const chat = await Chat.findOne({ _id: chatId, participants: userId });
        // if the chat is not found, emit an error
        if (!chat) {
          socket.emit("socket-error", { message: "Chat not found" });
          return;
        }

        // create the new message
        const newMessage = await Message.create({
          sender: userId,
          chat: chatId,
          content: text,
        });

        // update the chat with the new message
        chat.lastMessage = newMessage._id;
        chat.lastMessageAt = new Date();
        // save the chat
        await chat.save();
        // populate the sender with name, email and avatar
        await newMessage.populate('sender', 'name avatar');

        // notify all clients in the chat that a new message has been sent
        io.to(`chat:${chatId}`).emit("new-message", newMessage);
        
        // aso emit to participant's persona rooms (for chat list view)
        for (const participantId of chat.participants) {
          io.to(`user:${participantId}`).emit("new-message", newMessage);
        }
      } catch (error) {
        console.error("Error in send-message", error);
        socket.emit("socket-error", { message: "Failed to send message" });
      }
    });


    // TODO: Implement typing indicator
    socket.on('typing', async () => {})

    socket.on("disconnect", () => {
      const userId = socket.data.userId;
      const sockets = onlineUsers.get(userId);
      if (!sockets) return;
      sockets.delete(socket.id);
      if (sockets.size === 0) {
        onlineUsers.delete(userId);
        socket.broadcast.emit("user-offline", { userId });
      } else {
        onlineUsers.set(userId, sockets);
      }
    });
  })
  return io;
}