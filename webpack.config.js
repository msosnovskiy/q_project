const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    'index': './src/js/index.js',
    'about': './src/js/about.js',
    'solutions': './src/js/solutions.js',
    'services': './src/js/services.js',
    'news': './src/js/news.js',
    'career': './src/js/career.js',
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
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties'
            ]
          }
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
              name: 'images/[name].[contenthash].[ext]',
              esModule: false,
              publicPath: '../'
            }
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
              webp: {
                quality: 90
              }
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]',
        options: {
          outputPath: './fonts',
          publicPath: '../fonts'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css'
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
    new CopyWebpackPlugin(
      [
        {
          from: path.resolve(__dirname, 'src/js/vendor'), to: path.resolve(__dirname, 'dist/js/vendor')
        }
      ]
    ),
    new WebpackMd5Hash()
  ]
};