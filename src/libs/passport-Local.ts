import { Strategy as LocalStrategy } from "passport-local";
import { findUserByEmail, findUserById } from "../services/usersServices";
import bcrypt from "bcrypt";
import passport from "passport";

export const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    const user = await findUserByEmail(email);

    if (!user) {
      return done(null, false);
    }

    bcrypt.compare(password, user.password, (err, resposta) => {
      if (resposta) {
        return done(null, user);
      } else {
        done(null);
      }
    });

    // passport.serializeUser((user: any, done) => {
    //   done(null, user.id);
    // });

    // passport.deserializeUser(async (id: number, done) => {
    //   try {
    //     const user = await findUserById(id);

    //     if (user) {
    //       done(null, user);
    //     } else {
    //       done(null, false);
    //     }
    //   } catch (error) {
    //     done(error, null);
    //   }
    // });
  }
);
