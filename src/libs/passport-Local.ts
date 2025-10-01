import { Strategy as LocalStrategy } from "passport-local";
import { createUserJWT, findUserByEmail, findUserById } from "../services/usersServices";
import bcrypt from "bcrypt";
import { LocalStrategyType } from "../types/localStrategyType";

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
        const token = createUserJWT(user);

        const { password, ...userResponse } = user;
        const responseUser: LocalStrategyType = {
          user: userResponse,
          auth: { token },
        };

        return done(null, responseUser);
      } else {
        done(null);
      }
    });
  }
);
