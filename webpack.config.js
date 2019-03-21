module.exports = {
  mode: 'production',

  // set this to your entry point
  entry: "./src/js/main.js",

  // change this to your output path
  output: {
    path: __dirname+'/dist/js',
    filename: "app.js"
  },

  // create a map file for debugging
  devtool: 'source-map',

  // configure the loaders

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

