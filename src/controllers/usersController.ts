import { Response, Request } from "express";
import { listAllClientes, updateUserbyId, userCreate } from "../services/usersServices";

export const getAllUsers = async (req: Request, res: Response) => {
  res.status(200).json(await listAllClientes());
};

export const PostUsers = async (req: Request, res: Response) => {
  try {
    const { id, name, email, password: string } = req.body;
    const { password, ...createUser } = await userCreate({ id, name, email, password: string });
    res.status(201).json(createUser);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const UpdateDataUser = async (req: Request, res: Response) => {
  try {
    const { id, newRole } = req.body;
    const { password, ...updateUser } = await updateUserbyId(id, newRole);
    res.status(200).json(updateUser);
  } catch (err) {
    res.json({ Erro: err });
  }
};
