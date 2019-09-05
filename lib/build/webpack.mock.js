const apiMocker = require('mocker-api')
const path = require('path')
const server = require('./webpack.server')
const merge = require('webpack-merge')
const webpackCommon = require("./webpack.config.common")
const webpack = require('webpack')

module.exports = merge(webpackCommon, server, {
    mode: "none",
    devServer: {
        before: function (app, server) {
            apiMocker(app, path.resolve('./mock/index.js'))
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('mock')
        })
    ]
})