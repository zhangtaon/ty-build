const merge = require('webpack-merge');
const webpack = require('webpack')
let webpackCommon = require("./webpack.config.common")

module.exports = merge(webpackCommon,{
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('fat')
        })
  ]
});