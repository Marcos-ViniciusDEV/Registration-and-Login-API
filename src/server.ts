import express, { urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";
import { router } from "../src/routes/index";
import passport from "passport";
import { localStrategy } from "./libs/passport-Local";
// import session from "express-session";

const server = express();

server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.disable("x-powered-by");
server.use(express.json());

// server.use(
//   session({
//     secret: "yourSecretHere", // Troque por uma string aleatória
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }, // Em produção, use 'true' se estiver em HTTPS
//   })
// );

server.use(passport.initialize());
passport.use(localStrategy);

server.use(router);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
