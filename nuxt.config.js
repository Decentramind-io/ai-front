export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AI.decentramind.io',
    htmlAttrs: {
      lang: 'en'
    },

    meta: [
      { charset: 'utf-8' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

      { name: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-color', content: '#ffffff' },

    ],

    link: [
      { rel: 'manifest', href: '/icons/site.webmanifest' },

      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/icons/apple-touch-icon.png' },

      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Roboto:wght@400;700&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'https://megamind.network/sd',
  },

  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
