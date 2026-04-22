import axios from 'axios';
import type { AuthResponse, User, LoginInput } from '../types/auth';

const BASE_URL = 'http://127.0.0.1:8080';

export const signup = async (data: LoginInput): Promise<AuthResponse> => {
  const res = await axios.post(`${BASE_URL}/api/auth/signup`, data);
  return res.data;
};

export const signin = async (data: LoginInput): Promise<AuthResponse> => {
  const res = await axios.post(`${BASE_URL}/api/auth/signin`, data);
  return res.data;
};

export const getMe = async (token: string): Promise<User> => {
  const res = await axios.get(`${BASE_URL}/api/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const signout = async (token: string): Promise<void> => {
  await axios.post(`${BASE_URL}/api/auth/signout`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
