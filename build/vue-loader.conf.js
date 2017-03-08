var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction ?
      config.build.productionSourceMap :
      config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['ie > 9', 'chrome > 24', 'android >= 4.2', 'ios >= 7', 'safari >= 8', 'last 10 versions']
    })
  ]
}
