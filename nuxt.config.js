
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sukuk',
     htmlAttrs: {
      lang: 'ar',
      dir: 'rtl'
    },
    script: [
      
      '@/node_modules/@fortawesome/fontawesome/js/brands.js',
      '@/node_modules/@fortawesome/fontawesome/js/solid.js',
      '@/node_modules/@fortawesome/fontawesome/js/fontawesome.js'
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      
    ],
    link: [
      
      {
        rel: 'icon',
        type: 'image/ico',
        href: 'https://manafaco.s3-eu-west-1.amazonaws.com/resources/images/sukuk/favicon.ico'
      },

      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.rtl.min.css',
    '@/assets/scss/style.scss'
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap-vue',
    '@/plugins/vue-typed-js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   
  }
}
