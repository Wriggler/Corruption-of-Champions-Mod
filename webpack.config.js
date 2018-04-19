const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './ts/classes/CoC.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Corruption of Champions',
      inlineSource: '.(js)$',
      filename: 'dist/CoC.html',
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],

  output: {
    filename: 'ts/bundle.js',
    publicPath:'',
  },
};