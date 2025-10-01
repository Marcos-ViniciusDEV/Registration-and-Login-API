import { Router } from "express";
import { getAllUsers, PostUsers, UpdateDataUser } from "../controllers/usersController";
import { authPassportLocal } from "../middleware/authLoginPassportLocal";
import { jwtMiddlewareAuth } from "../middleware/authJWTPassportToken";
import { upload } from "../controllers/uploadController";
import { uploader } from "../libs/multer";

export const router = Router();

router.get("/users", jwtMiddlewareAuth, getAllUsers);
router.post("/users", PostUsers);

router.put("/users", UpdateDataUser);

router.post("/login", authPassportLocal, (req, res) => {
  const user = req.user;

  res.json(user);
});

router.get("/jwt", (req, res) => {
  res.json({ msg: "acessou JWT" });
});

router.post("/upload", uploader.single("arquivo"), upload);
