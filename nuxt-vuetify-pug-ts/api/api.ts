import { AxiosInstance } from "axios";
import { NuxtAxiosInstance } from "nuxt";
import { LoginParam } from "~/@types/api";
import { AxiosNuxt } from '../@types/alias';
/**
 * Apis
 */
export class Api {
  host: string;
  $axios: AxiosNuxt;
  constructor($axios: AxiosNuxt, host: string) {
    this.$axios = $axios;
    this.host = host;
  }

  login = async (data: LoginParam) =>
    await this.$axios.$put(`${this.host}/v1/sys/login`, data);
}
