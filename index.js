console.log("tyBuild test index");
const prod = require("./lib/build/webpack.prod");
const dev = require("./lib/build/webpack.dev");
const mock = require("./lib/build/webpack.mock");
const proxyDev = require("./lib/build/webpack.proxy.dev");
const proxyMock = require("./lib/build/webpack.proxy.mock");

module.exports = {
    prod,
    dev,
    mock,
    proxyDev,
    proxyMock
}