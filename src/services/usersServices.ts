import { Prisma, PrismaClient, Role } from "../generated/prisma";
import bcrypt from "bcrypt";
import { User } from "../types/userType";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const createUserJWT = (user: User) => {
  const playload = {
    id: user.id,
  };
  return jwt.sign(playload, process.env.JWT_KEY as string);
};

export const listAllClientes = async () => {
  return await prisma.users.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      status: true,
      role: true,
      create_data: true,
      updata_data: true,
    },
  });
};

export const userCreate = async (data: Prisma.usersCreateManyInput) => {
  const originalPassword = data.password;
  const salRounds = 10;
  const hashedPassword = await bcrypt.hash(originalPassword, salRounds);

  return await prisma.users.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
};

export const findUserByEmail = async (email: string) => {
  return await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
};

export const findUserById = async (id: number) => {
  return await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
};

export const updateUserbyId = async (id: number, newRole: Role) => {
  return await prisma.users.update({
    where: {
      id: id,
    },
    data: {
      role: newRole,
    },
  });
};
