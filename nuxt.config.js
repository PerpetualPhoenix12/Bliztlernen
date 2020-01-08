
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Study Flashcards | Blitzlernen",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
    '~/plugins/firebase.js'
  ],
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/router'
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  axios: {
  },
  build: {
    extend (config, ctx) {
    }
  }
}
