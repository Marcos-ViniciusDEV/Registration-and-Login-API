import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { findUserById } from "../services/usersServices";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_KEY as string,
};

export const jwtStrategy = new JWTStrategy(options, async (playload, done) => {
  console.log(playload);
  try {
    const { id } = playload;
    const user = await findUserById(id);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    console.log(err);
  }
});
