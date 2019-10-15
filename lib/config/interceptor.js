import Vue from 'vue'
import { setHeader } from './index'

// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// Add a response interceptor
export default function setResponseInterceptors(axios) {
    axios.interceptors.response.use(function (response) {
        if ('' + response.data.code === "0") {
            return response.data.data;
        } else if ('' + response.data.code === "20004") {//token失效的情况
            sessionStorage.removeItem("Authorization");
            setHeader({ "Authorization": "" });
            location.reload();
        } else {
            Vue.prototype.$notify.error({
                title: '错误',
                message: response.data.msg
            })
            console.group("业务逻辑错误");
            console.warn(`请求接口：${response.config.url}`);
            if (response.config.params) {
                console.warn(`请求参数：${JSON.stringify(response.config.params)}`);
            }
            console.warn(`错误描述：${response.data.msg}`);
            console.warn(`错误码：${response.data.code}`);
            console.groupEnd();
            return Promise.reject(response.data);
        }
    }, function (error) {
        // Do something with response error
        return Promise.reject(error);
    });
}