import type { NextFunction, Response } from "express";
import type { AuthRequest } from "../middlewares/auth";
import { Chat } from "../models/Chat";
import { isValidObjectId } from "mongoose";

export const getChatsController = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    const chats = await Chat.find({ participants: userId })
    .populate('participants', 'name email avatar')
    .populate('lastMessage')
    .sort({ lastMessageAt: -1 });

    const formatedChats = chats.map((chat) => {
      const otherParticipant = chat.participants.find((participant) => participant._id.toString() !== userId);
      return {
        _id: chat._id,
        participant: otherParticipant,
        lastMessage: chat.lastMessage,
        lastMessageAt: chat.lastMessageAt,
        createdAt: chat.createdAt,
        updatedAt: chat.updatedAt,
      }
    });
    return res.status(200).json(formatedChats);
  } catch (error) {
    console.error("Error in getChatsController", error);
    res.status(500);
    next(error);
  }
}

export const getChatWithParticipantController = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    const { participantId } = req.params;
    
    if (!participantId) {
      return res.status(400).json({ message: "Participant ID is required" });
    }

    if (!isValidObjectId(participantId)) {
      return res.status(400).json({ message: "Invalid participant ID" });
    }

    if (participantId === userId) {
      return res.status(400).json({ message: "You cannot chat with yourself" });
    }

    let chat = await Chat.findOne({ participants: { $all: [userId, participantId] } })
    .populate('participants', 'name email avatar')
    .populate('lastMessage')

    if (!chat) {
      const newChat = new Chat({ participants: [userId, participantId] })
      await newChat.save();
      chat = await newChat.populate('participants', 'name email avatar');
    }

    const oyherChatParticipant = chat.participants.find((participant) => participant._id.toString() !== userId) ?? null;

    return res.status(200).json({
      _id: chat._id,
      participant: oyherChatParticipant,
      lastMessage: chat.lastMessage,
      lastMessageAt: chat.lastMessageAt,
      createdAt: chat.createdAt,
      updatedAt: chat.updatedAt,
    });
  } catch (error) {
    console.error("Error in getChatWithParticipantController", error);
    res.status(500);
    next(error);
  }
}