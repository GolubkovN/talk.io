import mongoose, { Schema, type Document } from "mongoose";

interface IMessage extends Document {
    content: string;
    sender: mongoose.Types.ObjectId;
    chat: mongoose.Types.ObjectId;
    createdAt: Date;
}

const messageSchema = new Schema({
    content: { type: String, required: true, trim: true },
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    chat: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

messageSchema.index({ chat: 1, createdAt: 1 });

export const Message = mongoose.model<IMessage>("Message", messageSchema);