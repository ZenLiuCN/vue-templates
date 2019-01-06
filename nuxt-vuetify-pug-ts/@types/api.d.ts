import { AxiosInstance } from "axios";
import { NuxtAxiosInstance } from "nuxt";
/**
 * Parameter for login
 */
export interface LoginParam {
  username: string;
  password: string;
}

export interface LoginedUser {
  token: string
  id?: string
  name?: string
  username?: string
}