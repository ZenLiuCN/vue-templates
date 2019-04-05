import Vue from 'vue'

Vue.filter('overflow', (data: string, len: number) =>
  data.length > len ? data.substring(0, len) + '...' : data
)
Vue.filter('fixUrl', (data: string) =>
  data.startsWith('/') ? data : data.startsWith('http') ? data : `/${data}`
)
