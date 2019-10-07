
import VueRouter from 'vue-router'

//解决重复路由报错
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
    // console.log("push location:", location);
    return originalPush.call(this, location).catch(err => err);
}