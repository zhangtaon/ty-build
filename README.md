## webpack 打包构建 vue

### 功能清单

支持es6✅

支持typescript

支持sass✅

自动生成index.html文件✅

二进制文件加载✅

支持.vue单文件组件解析✅

模块热替换✅

eslint(vue)代码规范化检查✅

本地mock✅

集成数据请求库axios✅

集成elementUI库✅

环境区分

dev ✅

prod ✅

proxy（前后端联调，接口请求代理到目标主机）✅
处理图片 -------

资源文件抽离 ————————

合并压缩js

hash资源文件 ✅

资源文件产出sourcemap

构建分离

### 安装

yarn

### 启动（请求本地mock数据）

yarn start

### 启动（请求代理到dev环境）------ 暂停使用

yarn proxy-dev

### 启动（请求代理到fat环境）

yarn proxy-fat

### 启动（请求代理到mock环境）

yarn proxy-mock

### 开发打包 ------ 暂停使用

yarn dev

### 开发部署脚本 ------ 暂停使用

sh dev.sh 分支名 (必须指定）

	例：sh dev.sh gis.01

### fat打包

yarn fat

### fat部署脚本

sh fat.sh 分支名 (必须指定）

	例：sh fat.sh gis.01

### 生产打包

yarn prod

### 生产部署脚本

sh prod.sh 分支名（必须指定）

	例：sh prod.sh gis.01


# 项目初始化配置

多环境地址维护

mock、fat、prod 下的 app（中后台api）、视频api、视频直播地址，geoserver地址

多网关配置

多网关axios实例维护

多网关axios实例拦截器功能常规数据信息过滤返回

多网关axios实例头部认证信息控制

多次访问统一路由错误处理















