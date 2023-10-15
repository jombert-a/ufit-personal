import { MILLISECONDS_IN_SECOND, SECONDS_IN_MINUTE } from "$lib/helpers/datetime/constants";
import { sign, verify, type JwtPayload, type SignOptions } from "jsonwebtoken";

export function getSecretKey(): string {
  return process.env.JWT_SECRET as string
}

function getIssueAtTime() {
  return Math.floor(Date.now() / MILLISECONDS_IN_SECOND);
}

function getDefaultExpiresIn() {
  const FIVETEEN_MINUTES = SECONDS_IN_MINUTE * 15;
  return FIVETEEN_MINUTES;
}

export function createAccessToken(
  defaultPayload: JwtPayload = {},
  secretKey: string,
  defaultOptions: SignOptions = {},
) {
  const iat = getIssueAtTime();
  const expiresIn = defaultOptions.expiresIn ?? getDefaultExpiresIn();

  const payload: JwtPayload = { ...defaultPayload, iat };
  const options: SignOptions = { ...defaultOptions, expiresIn };
  
  return sign(payload, secretKey, options);
};

export function verifyAccessToken<D extends JwtPayload | string = JwtPayload | string>(token: string, secretKey: string) {
  return verify(token, secretKey) as D;
}