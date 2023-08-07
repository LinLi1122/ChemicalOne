publicPath: process.env.NODE_ENV === 'production'
module.exports = {
	publicPath: process.env.NODE_ENV === 'production'? '/': '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import \'~@/assets/scss/vuetify/variables\''
      },
      scss: {
        additionalData: '@import \'~@/assets/scss/vuetify/variables\';'
      }
    }
  },

  // https://cli.vuejs.org/config/#transpiledependencies
  transpileDependencies: [
    'vuetify'
  ]
}
