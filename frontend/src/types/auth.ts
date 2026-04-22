export interface AuthResponse {
  access_token: string;
  token_type: string;
}

export interface User {
  id: number;
  email: string;
}

export interface LoginInput {
  email: string;
  password: string;
}
