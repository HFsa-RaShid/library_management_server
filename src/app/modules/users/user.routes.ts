import { Router } from "express";
import { userControllers } from "./user.controller.js";

const router = Router();

router.post("/", userControllers.createUser);
router.get("/", userControllers.getAllUsers);

router.get("/:userId", userControllers.getSingleUser);
router.patch("/:userId", userControllers.updateUser);
router.delete("/:userId", userControllers.deleteUser);

export const userRoutes = router;