import { PrismaClient } from "@prisma/client";


declare global {
    var prisma: PrismaClient | undefined;
    
}

const prismaClientSingleton = () => {
  return new PrismaClient();
};

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export const fetchTasks = async () => { 
  const result = await prisma.memo.findMany();
  return result
}