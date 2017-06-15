import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import path from 'path';

export default {
  debug: false,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    // necessary for hot reloading with IE
    'eventsource-polyfill',
    // note that it reloads the page if hot module reloading fails.
    'webpack-hot-middleware/client?reload=true',
    './client/index'
  ],
  target: 'web',
  output: {
    // Note: Physical files are only output by the production build task.
    // Use `npm run build`
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './client'
  },
  plugins: [
    new ExtractTextPlugin('./client/styles/styles.css', {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] },
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        exclude: path.resolve(__dirname, 'node_modules'),
        loaders: ['babel-loader']
      },
      {
        test: /(\.css)$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};
