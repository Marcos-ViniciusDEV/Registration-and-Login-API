import express, { urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";
const server = express();

server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.disable("x-powered-by");
server.use(express.json());

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
