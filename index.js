const prod = require("./lib/build/webpack.prod");
const dev = require("./lib/build/webpack.dev");
const mock = require("./lib/build/webpack.mock");
const proxyDev = require("./lib/build/webpack.proxy.dev");
const proxyMock = require("./lib/build/webpack.proxy.mock");

module.exports = function(env){
    if(env.prod){
        return prod;
    }
    if(env.dev){
        return dev;
    }
    if(env.start){
        return mock;
    }
    if(env.proxyDev){
        return proxyDev;
    }
    if(env.proxyMock){
        return proxyMock;
    }
}