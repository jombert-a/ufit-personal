import type { PublicUser } from "$lib/models/User/public.js";
import { RedirectStatus } from "$lib/server/constants/RedirectStasus.js";
import { ACCESS_TOKEN } from "$lib/server/constants/TokenNames.js";
import { getSecretKey, verifyAccessToken } from "$lib/server/services/token/accessToken.js"
import { redirect } from "@sveltejs/kit";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export function load({ cookies }) {
  try {  
    const token = cookies.get(ACCESS_TOKEN);
    const user = verifyAccessToken<PublicUser>(token || '', getSecretKey());
  
    if (!user) throw redirect(RedirectStatus.MOVED_TEMPORARY, '/auth/login');

    return {
      user,
    }
  
  } catch (error: unknown) {
    if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
      throw redirect(RedirectStatus.MOVED_TEMPORARY, '/auth/login');
    }

    throw error;
  }
}