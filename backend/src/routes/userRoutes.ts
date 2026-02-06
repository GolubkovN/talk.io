import { Router } from "express";
import { protectRoute } from "../middlewares/auth";
import { getUsersController } from "../controllers/userController";

const router = Router();

router.get('/', protectRoute, getUsersController);

export default router;