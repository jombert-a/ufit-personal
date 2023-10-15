import { RedirectStatus } from '$lib/server/constants/RedirectStasus.js';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '$lib/server/constants/TokenNames.js';
import { logoutUser } from '$lib/server/controllers/auth.js'
import { redirect } from '@sveltejs/kit';

export const actions = {
  logout: ({ cookies }) => {
    const token = cookies.get(ACCESS_TOKEN) || "";
    cookies.delete(ACCESS_TOKEN);
    cookies.delete(REFRESH_TOKEN);

    logoutUser(token);
    throw redirect(RedirectStatus.MOVED_TEMPORARY, '/auth/login');
  }
}