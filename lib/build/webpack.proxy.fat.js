const server = require('ty-build/lib/build/webpack.server')
const merge = require('webpack-merge')
const webpackCommon = require("ty-build/lib/build/webpack.config.common")
const webpack = require('webpack')
const gateway = require("ty-build/lib/config/gateway");
const env = require("../config/env.json");

module.exports = merge(webpackCommon, server, {
    mode: "none",
    devServer: {
        proxy: {
            [gateway.video]: {
                target: env.fat.video,
                changeOrigin: true
            },
            [gateway.app]: {
                target: env.fat.app,
                changeOrigin: true
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('proxy-fat')
        })
    ]
})