export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  // https://stackoverflow.com/questions/68520157/nuxt-fetch-hook-why-triggered-both-in-server-and-in-client
  target: 'static',
  head: {
    title: 'orca-watch',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true, // Can be also an object with default options
  },
  proxy: {
    '/yakkabotapi': { target: 'http://yakkabot.com', pathRewrite: { '^/yakkabotapi': '' } },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    base: '/',
    linkExactActiveClass: 'is-active',
  },
  googleFonts: {
    display: 'swap',
    families: {
      'Fredoka+One': true,
    },
  },
  buefy: {
    css: false,
  },
}
