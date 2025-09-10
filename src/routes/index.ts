import { Router } from "express";
import { getAllUsers, PostUsers } from "../controllers/usersController";

export const router = Router();

router.get("/users", getAllUsers);
router.post("/users", PostUsers);
