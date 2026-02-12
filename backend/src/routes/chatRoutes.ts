import { Router } from "express";
import { protectRoute } from "../middlewares/auth";
import { getChatsController, getChatWithParticipantController } from "../controllers/chatController";

const router = Router();

router.use(protectRoute);

router.get('/', getChatsController);
router.post('/with/:participantId', getChatWithParticipantController);

export default router;