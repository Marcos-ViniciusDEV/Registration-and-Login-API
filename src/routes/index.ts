import { Router } from "express";
import { getAllUsers, PostUsers } from "../controllers/usersController";
import { authPassportLocal } from "../middleware/authLoginPassportLocal";

export const router = Router();

router.get("/users", getAllUsers);
router.post("/users", PostUsers);
router.post("/login", authPassportLocal, (req, res) => {
  res.json({ user: req.user, auth: req.authInfo });
});
