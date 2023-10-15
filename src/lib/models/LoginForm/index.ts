export interface LoginFormProps {
  login: string
  password: string
}

export interface LoginFormResult {
  token: string
  tokenRefresh: string
}