import { Router } from "express";
import { protectRoute } from "../middlewares/auth";
import { getMeController, authCallbackController } from "../controllers/authController";

const router = Router();

router.get('/me', protectRoute, getMeController);
router.post('/callback', authCallbackController);

export default router;