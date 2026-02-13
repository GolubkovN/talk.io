import { Router } from "express";
import { protectRoute } from "../middlewares/auth";
import { getUserByIdController, getUsersController } from "../controllers/userController";

const router = Router();

router.get('/', protectRoute, getUsersController);
router.get('/:id', protectRoute, getUserByIdController);
export default router;