import Vue from 'vue'
import { NuxtContext } from 'nuxt'
import { Validator, ErrorBag } from 'vee-validate'
import CryptoJs from 'crypto-js'
import { MomentLib } from '~/plugins/ext-moment'
import { VuetifyObject } from 'vuetify/types'
import { Logger } from '~/plugins/ext-logger'
import { IMessager } from '../plugins/ext-messager'
import { NuxtAxiosInstance } from 'nuxt'

declare module 'vue/types/vue' {
  interface Vue {
    $vuetify: VuetifyObject
    $validator: Validator
    $moment: MomentLib
    $crypto: CryptoJs.Hashes
    $log: Logger
    $messager: IMessager
    $axios: NuxtAxiosInstance
    errors: ErrorBag
  }
  interface VueConstructor<V extends Vue = Vue> {
    crypto: CryptoJs.Hashes
    moment: MomentLib
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    // asyncData?: (ctx: NuxtContext) => Promise<any>
    // fetch?: (ctx: NuxtContext) => Promise<any>
    // layout?: string
    // middleware?: string | string[]
  }
}
