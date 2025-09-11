import { RequestHandler } from "express";
import passport from "passport";
import { User } from "../types/userType";

export const authPassportLocal: RequestHandler = (req, res, next) => {
  passport.authenticate("local", (err: any, user: User, info: string) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json(info || { message: "Não autorizado" });
    }
    req.user = user;
    return next();
  })(req, res, next);
};
