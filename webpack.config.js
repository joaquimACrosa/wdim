const webpack = require('webpack');
const path = require('path');

module.exports = {
  // set this to your entry point
  entry: "./src/js/main.js",

  // change this to your output path
  output: {
    path: path.resolve(__dirname,'/dist/js/'),
    filename: "app.js",
    publicPath: "/assets/"
  },

  // create a map file for debugging
  devtool: 'source-map',

  // configure the loaders
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react'],
          compact: false
        }
      }
    ]
  },

  ///////////  uncomment this for production ////////////////
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   }),
  //   new webpack.DefinePlugin({
  //     'process.env': {'NODE_ENV': JSON.stringify('production')}
  //   })
  // ],////////////////////////////////////////////////////////

  watch: false // change this to true to keep webpack running
};

