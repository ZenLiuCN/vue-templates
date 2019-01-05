import Vue from "vue"

declare module "vue/types/vue" {
  interface Vue {
    //HookExample type define
    $HookExample: Function
  }
}
