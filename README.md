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

### 启动（请求代理到dev环境）

yarn proxy-dev

### 启动（请求代理到mock环境）

yarn proxy-mock

### 开发打包

yarn dev

### 开发部署脚本

sh dev.sh 分支名 (必须指定）

	例：sh dev.sh gis.01

### 生产打包

yarn prod

### 生产部署脚本

sh prod.sh 分支名（必须指定）

	例：sh prod.sh gis.01
















