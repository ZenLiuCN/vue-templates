import { NuxtAxiosInstance } from 'nuxt'
import { Logger } from '../plugins/ext-logger'

declare module 'vuex-module-decorators/dist/types/vuexmodule' {
  interface VuexModule {
    $axios: NuxtAxiosInstance
    $log: Logger
  }
}
