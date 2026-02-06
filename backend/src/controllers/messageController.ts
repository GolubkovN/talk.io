import type { NextFunction, Response } from "express";
import type { AuthRequest } from "../middlewares/auth";
import { Message } from "../models/Message";
import { Chat } from "../models/Chat";
import { isValidObjectId } from "mongoose";

export const getMessagesController = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId;
    const { chatId } = req.params;

    if (!isValidObjectId(chatId)) {
      return res.status(400).json({ message: "Invalid chatId" });
    }

    const chat = await Chat.findOne({ _id: chatId, participants: userId });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }
    const messages = await Message.find({ chat: chatId })
    .populate('sender', 'name email avatar')
    .sort({ createdAt: 1 });
    return res.status(200).json(messages);
  } catch (error) {
    console.error("Error in getMessagesController", error);
    res.status(500);
    next(error);
  }
}