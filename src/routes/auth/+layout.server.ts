import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
  const sessionId = cookies.get('sessionid');

  if (sessionId) {
    throw redirect(301, '/account');
  }
};