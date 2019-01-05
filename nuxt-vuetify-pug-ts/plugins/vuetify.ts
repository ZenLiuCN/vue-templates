import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.cyan.lighten1, // a color that is not in the material colors palette
    accent: colors.green.lighten3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
