const merge = require('webpack-merge');
const prod = require("./lib/build/webpack.prod");
const dev = require("./lib/build/webpack.dev");
const fat = require("./lib/build/webpack.fat");
const mock = require("./lib/build/webpack.mock");
const proxyDev = require("./lib/build/webpack.proxy.dev");
const proxyFat = require("./lib/build/webpack.proxy.fat");
const proxyPerson = require("./lib/build/webpack.proxy.person");
const proxyMock = require("./lib/build/webpack.proxy.mock");

module.exports = function(env,config){
    if(env.prod){
        return merge(prod,config);
    }
    if(env.fat){
        return merge(fat,config);
    }
    if(env.dev){
        return merge(dev,config);
    }
    if(env.start){
        return merge(mock,config);
    }
    if(env.proxyDev){
        return merge(proxyDev,config);
    }
    if(env.proxyFat){
        return merge(proxyFat,config);
    }
    if(env.proxyPerson){
        return merge(proxyPerson,config);
    }
    if(env.proxyMock){
        return merge(proxyMock,config);
    }
}