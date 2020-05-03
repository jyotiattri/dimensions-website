
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/fontawesome-all.min.css',
    '~/assets/css/main.css',
    '~/assets/css/noscript.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  styleResources: {
    scss: ['~/assets/sass/main.scss',
    '~/assets/sass/noscript.scss',
    '~/assets/sass/base/_page.scss',
    '~/assets/sass/base/_reset.scss',
    '~/assets/sass/base/_typography.scss',
    '~/assets/sass/components/_actions.scss',
    '~/assets/sass/components/_box.scss',
    '~/assets/sass/components/_button.scss',
    '~/assets/sass/components/_form.scss',
    '~/assets/sass/components/_icon.scss',
    '~/assets/sass/components/_icons.scss',
    '~/assets/sass/components/_image.scss',
    '~/assets/sass/components/_list.scss',
    '~/assets/sass/components/_table.scss',
    '~/assets/sass/layout/_bg.scss',
    '~/assets/sass/layout/_footer.scss',
    '~/assets/sass/layout/_header.scss',
    '~/assets/sass/layout/_main.scss',
    '~/assets/sass/layout/_wrapper.scss',
    '~/assets/sass/libs/_breakpoints.scss',
    '~/assets/sass/libs/_functions.scss',
    '~/assets/sass/libs/_mixins.scss',
    '~/assets/sass/libs/_vars.scss',
    '~/assets/sass/libs/_vendor.scss']
  }
}
