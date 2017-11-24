module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'x-shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/base.css' },
      { rel: 'stylesheet', href: '/css/checkout.css' },
      { rel: 'stylesheet', href: '/css/product.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: ['~plugins/vue-axios', '~plugins/lazy-load', '~plugins/currency', {
    src: '~plugins/infinite-scroll',
    ssr: false
  }],
  modules: [
    '@nuxtjs/proxy'
  ],
  proxy: [
      [
        '/users',
        {
          target: 'http://localhost:3000', // api主机
        }
      ],
      [
        '/goods',
        {
          target: 'http://localhost:3000'
        }
      ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
