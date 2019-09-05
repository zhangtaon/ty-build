import axios from "axios";
import env from "./env.json"
import gateway from "./gateway"
let geoserver, hls, videoHttp;

/**
 * 获取直播地址
 * @param {String} url 
 */
function getHls(url) {
    return function (id) {
        return url + id + "/index.m3u8"
    }
}

/**
 * 初始化视频请求http服务
 * @param {String} url 
 */
function initVideoHttp(url) {
    url = url || "";
    videoHttp = axios.create({
        baseURL: url + gateway.video
    });
}

/**
 * 初始化gis请求http服务
 * @param {String} url 
 */
function setAxiosBaseUrl(url) {
    url = url || "";
    axios.defaults.baseURL = url + gateway.gis;
}

switch (process.env.NODE_ENV) {
    case "production":
        setAxiosBaseUrl(env.prod.gis);
        initVideoHttp(env.prod.video);
        geoserver = env.prod.geoserver;
        hls = getHls(env.prod.hls);
        console.log("production");
        break;
    case "development":
        setAxiosBaseUrl(env.dev.gis);
        initVideoHttp(env.dev.video);
        geoserver = env.dev.geoserver;
        hls = getHls(env.dev.hls);
        console.log("development");
        break;
    case "proxy-dev":
        setAxiosBaseUrl();
        initVideoHttp();
        geoserver = env.dev.geoserver;
        hls = getHls(env.dev.hls);
        console.log("proxy-dev");
        break;
    case "proxy-mock":
        setAxiosBaseUrl();
        initVideoHttp();
        geoserver = env.dev.geoserver;
        hls = getHls(env.dev.hls);
        console.log("proxy-mock");
        break;
    default:
        setAxiosBaseUrl();
        initVideoHttp();
        geoserver = env.dev.geoserver;
        hls = function (id) {
            return env.mock.hls + id
        }
        console.log("mock");
        break;
}

console.log("ty gis baseURL:", axios.defaults.baseURL);
console.log("ty geoserver:", geoserver);
console.log("ty video baseURL:", videoHttp.prototype.constructor.defaults.baseURL);
console.log("ty hls:", hls(11));

export { geoserver, hls, videoHttp }