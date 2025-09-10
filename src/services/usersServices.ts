import { Prisma, PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const listAllClientes = async () => {
  return await prisma.users.findMany();
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
