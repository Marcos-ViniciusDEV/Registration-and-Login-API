import express, { urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";
import { router } from "../src/routes/index";
import passport from "passport";
import { localStrategy } from "./libs/passport-Local";
import { jwtStrategy } from "./libs/passport-JWT";

const server = express();

server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.disable("x-powered-by");
server.use(express.json());

server.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

server.use(router);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
