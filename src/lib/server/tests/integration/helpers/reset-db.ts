import { prismaClient } from "$lib/prisma";
import { fixtures } from "../__fixtures__";

export const resetDb = async () => {
  const user = await prismaClient.user.findUnique({
    where: {
      login: fixtures.user.login,
    },
  });

  if (!user) return;

  return prismaClient.$transaction([
    prismaClient.refreshToken.deleteMany({
      where: {
        userId: user.id 
      },
    }),

    prismaClient.user.delete({
      where: {
        id: user.id,
      },
    }),
  ]);
};