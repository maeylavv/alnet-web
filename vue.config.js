const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/alnet-web/' 
    : '/',
  configureWebpack: {
    devServer: {
      historyApiFallback: {
        index: '/index.html',  
      },
    },
  },
});
