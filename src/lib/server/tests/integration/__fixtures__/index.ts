import type { RegistrationFormProps } from "$lib/models/RegistrationForm";
import type { LoginFormProps } from "$lib/models/LoginForm";

const TEST_USER = {
  name: "Jombert Bombert",
  login: "jombert",
  password: "iamsuperbear",
}

export const fixtures = {
  user: TEST_USER,

  registrationProps: {
    name: TEST_USER.name,
    login: TEST_USER.login,
    password: TEST_USER.password,
    agreement: true,
  } satisfies RegistrationFormProps,

  loginInProps: {
    login: TEST_USER.login,
    password: TEST_USER.password,
  } satisfies LoginFormProps, 
}