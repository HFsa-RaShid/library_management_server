import { Router } from "express";
import { membershipControllers } from "./membership.controller.js";

const router = Router();


router.get("/", membershipControllers.getAllMemberships);


router.post("/", membershipControllers.createMembership);


router.get("/:userId", membershipControllers.getMyMembership);


router.patch("/:id", membershipControllers.updateMembership);

export const membershipRoutes = router;