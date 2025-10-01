import { RequestHandler } from "express";
import passport from "passport";
import { User } from "../types/userType";

export const jwtMiddlewareAuth: RequestHandler = (req, res, next) => {
  const authRequest = passport.authenticate("jwt", (err: any, user: User | false) => {
    if (user) {
      req.user = user;
      return next();
    }
    return res.status(401).json({ error: "Acesso negado" });
  });
  authRequest(req, res, next);
};
