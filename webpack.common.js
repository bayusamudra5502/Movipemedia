const HtmlWebpackPlugin = require('html-webpack-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new EsLintPlugin({
      context: path.resolve(__dirname, 'src/js'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            // esModule: false,
          },
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            // esModule: false,
            outputPath: 'assets/img',
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@style': path.resolve(__dirname, 'src/scss'),
      '@': path.resolve(__dirname, 'src/js'),
    },
  },
};
