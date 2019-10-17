const merge = require('webpack-merge');
let webpackCommon = require("./webpack.config.common")

module.exports = merge(webpackCommon,{
    mode: "development"
});