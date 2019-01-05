import Vue from 'vue'
import { Api } from '../api/api';



declare module 'vue/types/vue' {
  interface Vue {
    $api:Api
  }
}