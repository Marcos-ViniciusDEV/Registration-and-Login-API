import { Response, Request } from "express";
import { listAllClientes, userCreate } from "../services/usersServices";
import { stringify } from "querystring";

export const getAllUsers = async (req: Request, res: Response) => {
  res.status(200).json(await listAllClientes());
};

export const PostUsers = async (req: Request, res: Response) => {
  try {
    const { id, name, email, password } = req.body;
    const createUser = await userCreate({ id, name, email, password });
    res.status(201).json(createUser);
  } catch (err) {
    res.status(404).json(err);
  }
};
