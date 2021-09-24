export default {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  watchers: {
    webpack: {
      ignored: ['node_modules/**'], // 'files/**/*.js',
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  html: {
    lang: 'id', // default value
    translate: 'no', // default value
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-bs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google', content: 'notranslate' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
    ]
  },

  loading: {
    color: '#3ecf93',
    height: '3px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/custom/init.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/bootstrap',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: false, // disables the icon module
    manifest: {
      lang: 'id',
      name: 'NuxtPegasus',
      shortName: 'NXP',
      useWebmanifestExtension: false
    },
    workbox: {},
  },

  generate: {
    ignore: ['pegasus_init/'],

  },
  content: {},

  build: {
    transpile: [
      ({ isServer }) => 'vue-typeahead-bootstrap'
    ]
  }
}
