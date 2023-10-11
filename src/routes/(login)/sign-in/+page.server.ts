
export const actions = {
	default: async ({ cookies }) => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 5000))

    cookies.set('sessionid', 'devsession');
    return { success: true };
	}
};