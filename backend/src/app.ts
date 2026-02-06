import express from "express";
import { clerkMiddleware } from '@clerk/express'
import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";
import userRoutes from "./routes/userRoutes";
import messageRoutes from "./routes/messageRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

// Middleware that integrates Clerk authentication into your Express application. 
// It checks the request's cookies and headers for a session JWT and, 
// if found, attaches the Auth object to the request object under the auth key.
app.use(clerkMiddleware());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', timestamp: new Date().toISOString(), version: process.env.VERSION });
});

app.use('/api/auth', authRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

app.use(errorHandler);
export default app;