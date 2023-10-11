import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
  const sessionId = cookies.get('sessionid');
  if (!sessionId) redirect(303, '/sign-in');

  const user = {
    name: "Dev Admin",
    email: "dev@ufit.personal",
    age: 30,
  };

  return {
    user,
  }
}