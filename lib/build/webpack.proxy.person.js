const server = require('./webpack.server')
const merge = require('webpack-merge')
const webpackCommon = require("./webpack.config.common")
const webpack = require('webpack')
const gateway = require("../config/gateway");
const env = require("../config/env.json");

module.exports = merge(webpackCommon, server, {
    mode: "none",
    devServer: {
        proxy: {
            [gateway.video]: {
                target: env.person.video,
                changeOrigin: true
            },
            [gateway.app]: {
                target: env.person.app,
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