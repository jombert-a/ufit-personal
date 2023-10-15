import { parseFormData } from '$lib/helpers/parseFormData'
import type { RegistrationFormProps } from '$lib/models/RegistrationForm/index.js';
import { checkRequiredProperty } from '$lib/models/ServerError/helpers/checkRequiredProperty.js';
import { ConflictError, UnprocessableEntityError } from '$lib/models/ServerError/index.js';
import { RedirectStatus } from '$lib/server/constants/RedirectStasus.js';
import { registerUser } from '$lib/server/controllers/auth.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const {login, name, password, agreement} = parseFormData<RegistrationFormProps>(formData);
  
      if (!agreement) {
        return new UnprocessableEntityError("Agreement is not accepted").failWithAction();
      }
    
      if (!login || !password || !name) {
        return new UnprocessableEntityError("Provided data is invalid")
          .updateActionData({
            login: checkRequiredProperty(login, "Login is required"),
            password: checkRequiredProperty(password, "Password is required"),
            name: checkRequiredProperty(name, "Name is required"),
            agreement: checkRequiredProperty(agreement, "Agreement is required"),
          })
          .failWithAction();
      }
  
      const result = await registerUser({ login, name, password, agreement });
  
      if (result.success) {
        throw redirect(RedirectStatus.MOVED_TEMPORARY, '/auth/login?after-registration=true');
      } else {
        return {
          success: false,
        }
      }
    } catch (error: unknown) {
      if (error instanceof ConflictError || error instanceof UnprocessableEntityError) {
        return error.failWithAction();
      }

      throw error;
    }
	}
};