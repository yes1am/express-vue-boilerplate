const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const generateConfig = (dev) => {
  const plugins = [
    new VueLoaderPlugin()
  ]
  if (dev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    )
  } else {
    plugins.push(
      new BundleAnalyzerPlugin()
    )
  }
  return {
    resolve: {
      extensions: ['*', '.js', '.vue'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: {
            loader: 'url-loader?limit=8192'
          }
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2$)$/,
          use: {
            loader: 'file-loader'
          }
        },
        {
          test: /.svg$/,
          loader: 'svg-inline-loader'
        },
      ]
    },
    plugins
  }
}

module.exports = {
  pro: generateConfig(),
  dev: generateConfig(true)
}
