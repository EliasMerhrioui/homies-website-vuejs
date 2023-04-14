const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  publicPath: './',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'BASE_URL': JSON.stringify('/')
      })
    ]
  },
  chainWebpack: config => {
    // Supprime les plugins d'injection HTML existants créés par Vue CLI
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');

    // Ajoute le nouveau plugin d'injection HTML
    config.plugin('html')
      .use(HtmlWebpackPlugin, [{
        filename: 'my-index.html',
        template: 'public/index.html',
        inject: true,
        chunksSortMode: 'auto'
      }]);

  }
};
