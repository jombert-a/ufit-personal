import { prismaClient } from "$lib/prisma";
import type { Prisma } from "@prisma/client";

export async function findRefreshTokens(where: Prisma.RefreshTokenFindManyArgs["where"]) {
  return await prismaClient.refreshToken.findMany({
    where,
  });
};

export async function deleteRefreshTokens(where: Prisma.RefreshTokenDeleteManyArgs["where"]) {
  return await prismaClient.refreshToken.deleteMany({
    where,
  });
};

export async function createRefreshToken(userId: Prisma.RefreshTokenUncheckedCreateInput["userId"]) {
  return await prismaClient.refreshToken.create({
    data: {
      userId,
    }
  });
};