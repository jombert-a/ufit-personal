import bcrypt from 'bcrypt'

export function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
};