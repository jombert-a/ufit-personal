import { prismaClient } from "$lib/prisma";
import type { Prisma } from "@prisma/client";
import { HASH_SALT_ROUNDS } from "../constants/HashSaltRounds";
import bcrypt from "bcrypt";

export async function createUser(user: Prisma.UserCreateArgs["data"]) {
  const salt = bcrypt.genSaltSync(HASH_SALT_ROUNDS);
  const hash = bcrypt.hashSync(user.password, salt);

  return await prismaClient.user.create({
    data: {...user, password: hash},
  });
};

export async function findUser(where: Prisma.UserFindUniqueArgs["where"]) {
  return await prismaClient.user.findUnique({
    where,
  });
};