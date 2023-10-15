import { parseFormData } from '$lib/helpers/parseFormData'
import type { LoginFormProps } from '$lib/models/LoginForm/index.js';
import { checkRequiredProperty } from '$lib/models/ServerError/helpers/checkRequiredProperty.js';
import { UnauthorizedError, UnprocessableEntityError } from '$lib/models/ServerError/index.js';
import { RedirectStatus } from '$lib/server/constants/RedirectStasus.js';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '$lib/server/constants/TokenNames.js';
import { loginUser } from '$lib/server/controllers/auth.js';
import { redirect } from '@sveltejs/kit';

export function load({ url }) {
    return {
        afterRegistration: url.searchParams.has("after-registration"),
    }
}

export const actions = {
	default: async ({ request, cookies }) => {
        try {
            const formData = await request.formData()
            const {login, password} = parseFormData<LoginFormProps>(formData)
    
            if (!login || !password) {
                return new UnprocessableEntityError('Provided data is invalid')
                    .updateActionData({
                        login: checkRequiredProperty(login, 'Login is required'),
                        password: checkRequiredProperty(password, 'Password is required'),
                    })
                    .failWithAction();
            }
    
            const result = await loginUser({ login, password });
            
            cookies.set(ACCESS_TOKEN, result.token, { httpOnly: true, sameSite: 'strict', path: '/' });
            cookies.set(REFRESH_TOKEN, result.tokenRefresh, { httpOnly: true, sameSite: 'strict', path: '/' });
            throw redirect(RedirectStatus.MOVED_TEMPORARY, '/account');
        } catch (error: unknown) {
            if (error instanceof UnauthorizedError) {
                return error.failWithAction();
            }

            throw error;
        }
	}
};