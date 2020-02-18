module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'movies',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#081c24',
          secondary: '#ffa500',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  },
  mode: 'spa',
  router: {
    base: '/vuePosterAPI/'
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

