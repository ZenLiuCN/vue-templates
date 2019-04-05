const pkg = require('./package')
const path = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
module.exports = {
  mode: 'spa',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.title,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/ext-vuetify.ts',
    '@/plugins/ext-filters.ts',
    '@/plugins/ext-axios.ts',
    { src: '@/plugins/ext-dexie.ts', ssr: false },
    '@/plugins/ext-moment.ts',
    '@/plugins/ext-validate.ts',
    '@/plugins/ext-crypto.ts',
    '@/plugins/ext-directive.ts',
    '@/plugins/ext-control.ts',
    { src: '@/plugins/ext-logger.ts', ssr: false },
    '@/plugins/ext-messager.ts',
    '@/plugins/ext-svg-icon.ts'
  ],
  router: {
    mode: 'hash'
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/moment'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: '/ps'
    // baseURL: 'http://127.0.0.1:8080/ps'
    baseURL: 'http://192.168.8.173:8080/ps'
  },

  /*
   ** Build configuration
   */
  build: {
    typescript: {
      typeCheck: false // or ForkTsChecker options
    },
    babel: {
      plugins: ['lodash'],
      presets({ isServer }) {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              targets: isServer
                ? { node: 'current' }
                : { browsers: ['last 10 versions'], ie: 11 }
            }
          ]
        ]
      }
    },
    plugins: [new LodashModuleReplacementPlugin(), new VuetifyLoaderPlugin()],
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    extend(config) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      if (svgRule) svgRule.test = /\.(png|jpe?g|gif|webp)$/
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              {
                /*  prefixIds: {
                  prefix: (node, { path }) => basename(path, '.svg'),
                  delim: '-'
                } */
              }
            ]
          }
        }
      })
    }
  }
}
