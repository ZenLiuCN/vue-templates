import Vue from "vue"

export default function VueHooker() {
  Vue.prototype.$HookExample = () => {
    console.warn("this is hook example")
  }
}
