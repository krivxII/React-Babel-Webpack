const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  /////////////////////////////////////////////////
  entry: {
   //index: './src/componente1/index.js',
   //index: './src/ejemplo1/index.js',
   //index: './src/componente2/index.js',
   //index: './src/3componente/index.js',
   //index: './src/4componenteState/index.js',
   //index: './src/5componenteEvents/index.js',
   //index: './src/6componenteConRen/index.js',
    index: './src/7componenteRenderProps/index.js',
   
  
  },
  /////////////////////////////////////////////////
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "./src/index.html",
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  /////////////////////////////////////////////////////
  mode: "development",
  //////////////////////////////////////////////////////
  devServer: {
    //contentBase: './dist',
    contentBase: path.join(__dirname, "dist/"),
    hotOnly: true,
   // port: 3000,
  //  publicPath: "http://localhost:3000/dist/",
  },
  ///////////////////////////////////////////////////////
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
   // publicPath: "./dist",  da error
  },

  /////////////////////////////////////////////////////// 
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  ///////////////////////////

};