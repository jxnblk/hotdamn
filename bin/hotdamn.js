#!/usr/bin/env node

var path = require('path')
var program = require('commander')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var pkg = require('../package.json')

program
  .version(pkg.version)
  .option('[entry]', 'Entry JavaScript file')
  .option('-o, --output [output]', 'Output filename')
  .option('-D, --dev', 'Run development server')
  .option('-i, --index [index]', 'webpack-dev-server historyApiFallback index option')
  .parse(process.argv)

  // Future options:
  // - port
  // - css-modules

if (program.args.length) {
  var dir = process.cwd()
  var file = program.args[0]

  if (!file) {
    console.error('Could not find entry file', file)
    return false
  }

  var config = {
    entry: [
      './' + file,
    ],

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: [
              'es2015',
              'stage-0',
              'react',
              'react-hmre'
            ]
          }
        },
        {
          test: /\.json$/,
          loaders: [
            'json'
          ]
        },
        {
          test: /\.css$/,
          loaders: [
            'style',
            'css',
          ]
        },
        {
          test: /\.html$/,
          loader: 'html'
        },
        {
          test: /\.(md|markdown)$/,
          loaders: [
            'html',
            'markdown'
          ]
        },
        {
          test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/,
          loader: 'url?limit=10000'
        },
        {
          test: /\.(ttf|eot)$/,
          loader: 'file'
        }
      ]
    }
  }

  if (program.dev) {
    console.log('dev', file)

    config.entry.unshift(
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/dev-server'
    )
    config.output = {
      path: dir,
      filename: 'bundle.js'
    }

    config.plugins = [
      new webpack.HotModuleReplacementPlugin()
    ]

    new WebpackDevServer(webpack(config), {
      hot: true,
      historyApiFallback: program.index ? {
        index: program.index
      } : false
    }).listen(8080, 'localhost', function (err, result) {
      if (err) {
        console.error(err)
      }

      console.log('Listening at http://localhost:8080/')
    })
  } else {
    console.log('bundle', file)

    config.plugins = [
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin()
    ]

    config.output = {
      path: dir,
      filename: program.output || 'bundle.js'
    }

    webpack(config, function (err, stats) {
      if (err) {
        console.error(err)
      }

      console.log(stats.toString())
    })
  }
}

