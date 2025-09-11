import { PrismaClient } from "../generated/prisma";

export const prisma = new PrismaClient();

export async function connect() {
  await prisma.$connect;
}

connect();

export default connect();
