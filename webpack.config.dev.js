var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var AssetsWebpackPlugin = require('assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeModulesDir = path.join(__dirname, 'node_modules');
var webackConfig = {
  entry: {
    example: ['./src/modules/example/index.js'],
  },
  devtool: 'souremap',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js',
    publicPath: '/',
      // chunkFilename: "[id].js"
  },

  // externals: {
  // require('jquery') is external and available
  //  on the global var jQuery
  //   'jquery': 'jQuery'
  // },
  resolve: {
    alias: {
      'font-awesome.css': path.resolve(nodeModulesDir, 'font-awesome/css/font-awesome.min.css'),
    },
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src'),
    ],
    // root: [
    //   path.resolve('./src')
    // ],
    extensions: ['.js', '.jsx', '.less'],
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin(
      '[name].css', { allChunks: true }
    ),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /(node_modules)/,
      // }, {
      //   test: /\.less$/,
      //  css?-autoprefixer!postcss!less
      //   loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!less')
      // }, {
      //   test: /\.css$/,
      //   loader: 'style!css'
    // }, {
    //   test: /\.json$/,
    //   loader: 'json-loader',
    }, {
      test: /(\.less|\.css)$/,
      use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'postcss-loader', 'less-loader'],
    }, {
      test: /\.jpg|\.png$/,
      loader: 'file-loader',
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff',
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }],

  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true,
    historyApiFallback: {
      index: '/index.html',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
// if (env === 'production') {
webackConfig.plugins.push(new webpack.DefinePlugin({
  ENV: 'devepoment',
}));

webackConfig.plugins.push(new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/views/index.html'),
  minify: {
    collapseWhitespace: true,
  },
}));
module.exports = webackConfig;
