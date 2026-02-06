import { Router } from "express";
import { protectRoute } from "../middlewares/auth";
import { getMessagesController } from "../controllers/messageController";

const router = Router();

router.get('/chat/:chatId', protectRoute, getMessagesController);

export default router;