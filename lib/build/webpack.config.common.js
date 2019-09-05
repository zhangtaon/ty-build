const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _path = require("./webpack.config.constant");
const webpack = require('webpack');

module.exports = {
    entry: './src/module/main.js',
    module: {
        rules: [
            {
                test: /\.scss$/,//处理项目中sass编写的样式
                use: [
                    "vue-style-loader",
                    "css-loader", // translates CSS into CommonJS
                    {
                        loader: 'sass-loader',
                        options: {
                            data: `$color: green;`//scss全局变量
                        }
                    }
                ]
            },
            {
                test: /\.css$/,//处理第三方库中的css
                use: [
                    "style-loader",//Adds CSS to the DOM by injecting a <style> tag
                    "css-loader" // translates CSS into CommonJS
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: _path.image
                            // name: '[name].[ext]?[hash]'
                        }
                    }
                ],
            },
            {
                test: /\.(flv|mp4|swf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: _path.video
                            // name: '[name].[ext]?[hash]'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: _path.svg
                            // name: '[name].[ext]?[hash]'
                        }
                    }
                ]
            },
            {
                test: /\.(js|vue)$/,
                loader: "eslint-loader",
                enforce: "pre",
                //指定检查的目录
                include: [path.resolve(__dirname, './')],
                //eslint检查报告的格式规范
                options: {
                    formatter: require("eslint-friendly-formatter")
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, _path.dist)
    }
};
/*
    webpackCommon.module.rules.push({
        test: /\.vue$/,
        loader: 'webpack-px-to-rem',
        // 这个配置是可选的
        query: {
            // 1rem=npx 默认为 10
            basePx: 16,
            // 只会转换大于min的px 默认为0
            // 因为很小的px（比如border的1px）转换为rem后在很小的设备上结果会小于1px，有的设备就会不显示
            min: 1,
            // 转换后的rem值保留的小数点后位数 默认为3
            floatWidth: 3
        }
    })
*/