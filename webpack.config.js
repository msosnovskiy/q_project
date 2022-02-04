const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {

  devServer: {
    host: '192.168.100.5',//your ip address
    port: 8080,
    disableHostCheck: true,
  },
  devtool: 'eval-source-map',
  entry: {
    'index': './src/js/index.js',
    'about': './src/js/about.js',
    'solutions': './src/js/solutions.js',
    'services': './src/js/services.js',
    'news': './src/js/news.js',
    'career': './src/js/career.js',
    'kadry': './src/js/kadry.js',
    'avangard-kadry': './src/js/avangard-kadry.js',
    'avangard-accounting': './src/js/avangard-accounting.js',
    'government-purchases': './src/js/government-purchases.js',
    'budget': './src/js/budget.js',
    'consolidated-reporting': './src/js/consolidated-reporting.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/i,
        use: [
          (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[contenthash].[ext]',
              esModule: false,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 95
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: [0.90, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // webp: {
              //   quality: 90
              // }
            }
          }
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
        // options: {
        //   outputPath: './fonts',
        //   publicPath: '../fonts'
        // }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
      // filename: './styles/[name].[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['index'],
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['about'],
      template: './src/about.html',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['solutions'],
      template: './src/solutions.html',
      filename: 'solutions.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['services'],
      template: './src/services.html',
      filename: 'services.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['news'],
      template: './src/news.html',
      filename: 'news.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['career'],
      template: './src/career.html',
      filename: 'career.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['kadry'],
      template: './src/kadry.html',
      filename: 'kadry.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['government-purchases'],
      template: './src/government-purchases.html',
      filename: 'government-purchases.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['budget'],
      template: './src/budget.html',
      filename: 'budget.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['consolidated-reporting'],
      template: './src/consolidated-reporting.html',
      filename: 'consolidated-reporting.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['avangard-kadry'],
      template: './src/avangard-kadry.html',
      filename: 'avangard-kadry.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['avangard-accounting'],
      template: './src/avangard-accounting.html',
      filename: 'avangard-accounting.html',
    }),
    new CopyWebpackPlugin(
      [
        { from: path.resolve(__dirname, 'src/js/vendor'), to: path.resolve(__dirname, 'dist/js/vendor') },
        { from: path.resolve(__dirname, 'src/docs'), to: path.resolve(__dirname, 'dist/docs') },
        { from: path.resolve(__dirname, 'src/js/data'), to: path.resolve(__dirname, 'dist/data') },
        { from: path.resolve(__dirname, 'src/images/reviews'), to: path.resolve(__dirname, 'dist/images') },
        { from: path.resolve(__dirname, 'src/config'), to: path.resolve(__dirname, 'dist/') },
      ]
    ),
    new WebpackMd5Hash()
  ]
};