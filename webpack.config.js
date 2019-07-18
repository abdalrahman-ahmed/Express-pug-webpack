const path = require('path');const webpack = require('webpack');const HtmlWebPackPlugin = require('html-webpack-plugin');const js = {  test: /\.js$/,  exclude: /node_modules/,  use: [{    loader: 'babel-loader',  }],};const css = {  test: /\.css$/,  use: [{ loader: 'style-loader' }, {    loader: 'css-loader',    query: {      modules: true,      localIdentName: '[name]__[local]__[hash:base64:5]',    },  }],};const sass = {  test: /\.sass$/,  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }, { loader: 'sass-loader' }],};const images = {  test: /\.jpg$/,  use: [{    loader: 'file-loader',    options: {      name: 'img/[name].[ext]',    },  }],};const pug = {  test: /\.pug$/,  use: [{    loader: 'pug-loader',  }],};module.exports = {  target: 'web',  entry: {    main: './src/app.js',  },  mode: 'development',  output: {    filename: '[name]-bundle.js',    path: path.resolve(__dirname, './dist'),    publicPath: '/',  },  devServer: {    contentBase: 'dist',    overlay: true,    hot: true,    stats: { colors: true },  },  devtool: 'source-map',  module: {    rules: [js, css, sass, images, pug],  },  // plugins: [new webpack.HotModuleReplacementPlugin(), // Enable HMR  //           new webpack.NamedModulesPlugin()],};