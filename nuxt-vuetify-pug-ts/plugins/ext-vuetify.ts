import Vue from 'vue'
// import Vuetify from 'vuetify'
import Vuetify, { VLayout, VContainer } from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import zhHans from 'vuetify/es5/locale/zh-Hans'

// import '@mdi/font/css/materialdesignicons.css'

// Vue.use(Vuetify, {
//   components: { VLayout, VContainer },
//   iconfont: 'mdi',
//   lang: {
//     locales: { zhHans },
//     current: 'zhHans'
//   },
//   theme: {
//     primary: colors.cyan.base,
//     accent: colors.blue.base,
//     secondary: colors.amber.darken3,
//     info: colors.teal.lighten1,
//     warning: colors.amber.base,
//     error: colors.deepOrange.accent4,
//     success: colors.green.accent3
//   }
// })

/* const ICON_TPL = {
  'complete': '',
  'cancel': '',
  'close': '',
  'delete': '', // delete (e.g. v-chip close)
  'clear': '',
  'success': '',
  'info': '',
  'warning': '',
  'error': '',
  'prev': '',
  'next': '',
  'checkboxOn': '',
  'checkboxOff': '',
  'checkboxIndeterminate': '',
  'delimiter': '', // for carousel
  'sort': '',
  'expand': '',
  'menu': '',
  'subgroup': '',
  'dropdown': '',
  'radioOn': '',
  'radioOff': '',
  'edit': ''
} */
import { MDI_SVG } from './ext-svg-icon'
//! edit svg-to-vue
//! line 99  class: [${classNames},'svg'],

Vue.use(Vuetify, {
  components: { VLayout, VContainer },
  icons: MDI_SVG,
  // iconfont: 'mdi',
  lang: {
    locales: { zhHans },
    current: 'zhHans'
  },
  // theme: {
  //   primary: colors.cyan.base,
  //   accent: colors.blue.base,
  //   secondary: colors.amber.darken3,
  //   info: colors.teal.lighten1,
  //   warning: colors.amber.base,
  //   error: colors.deepOrange.accent4,
  //   success: colors.green.accent3
  // },
  options: {
    //support for stylus variable
    customProperties: true
  }
})
