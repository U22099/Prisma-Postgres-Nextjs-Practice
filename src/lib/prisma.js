import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
export async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  });
  console.log(user);
}