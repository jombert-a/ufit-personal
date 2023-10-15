import type { User } from "@prisma/client";

export type PublicUser = Partial<Omit<User, 'password'>>