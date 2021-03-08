const {
  override,
  addPostcssPlugins,
  addWebpackAlias,
    addWebpackPlugin
} = require('customize-cra')
const path = require('path')
const paths = require('react-scripts/config/paths')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

paths.appBuild = path.join(path.dirname(paths.appBuild), 'm')
module.exports = override(
    process.env.NODE_ENV === 'production' && addWebpackPlugin(new UglifyJsPlugin({
        uglifyOptions: {
            compress: {
                drop_debugger: true,
                drop_console: true
            }
        }
    })),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  addPostcssPlugins([
    require('postcss-px-to-viewport')({
      viewportWidth: 1080,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: /node_modules/i
    })
  ])
)
