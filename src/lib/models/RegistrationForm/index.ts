export interface RegistrationFormProps {
  name: string
  login: string
  password: string
  agreement: boolean
}

export interface RegistrationFormResult {
  success: boolean
}