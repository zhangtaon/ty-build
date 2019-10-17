const prod = require("./lib/build/webpack.prod");
const dev = require("./lib/build/webpack.dev");
const fat = require("./lib/build/webpack.fat");
const mock = require("./lib/build/webpack.mock");
const proxyDev = require("./lib/build/webpack.proxy.dev");
const proxyFat = require("./lib/build/webpack.proxy.fat");
const proxyMock = require("./lib/build/webpack.proxy.mock");

module.exports = function(env){
    if(env.prod){
        return prod;
    }
    if(env.fat){
        return fat;
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
    if(env.proxyFat){
        return proxyFat;
    }
    if(env.proxyMock){
        return proxyMock;
    }
}