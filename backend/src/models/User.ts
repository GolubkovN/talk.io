import mongoose, { Schema, type Document } from "mongoose";

interface IUser extends Document {
    clerkId: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    avatar: string;
}

const userSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    name: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    avatar: { type: String, default: "" },
});

export const User = mongoose.model<IUser>("User", userSchema);