# my-electron-vue3-app

> a demo of the electron-vue3 by LC.

> electron与vue-cli3.0脚手架做了很好的融合.

> 按照下面网址这个教程-新建了vue3和electron整合项目 my-electron-vue3-app

> electron-vue 安装环境、构建+打包（mac和windows）这一篇就够了_阿毛sky的博客-CSDN博客
  https://blog.csdn.net/qq_32244819/article/details/110820687

> 就是这个让我豁然开朗,配置了vue.config.js-【nodeIntegration:true】,也有快速打包应用说明

> 使用vue-cli-plugin-electron-builder创建electron-vue项目 - 我的程序笔记
  https://huayig.cn/index.php/archives/90/

# 技术栈
```markdown
此my-electron-vue-app 使用技术栈以及其版本 比较新的版本 也就是按照上面教程初始化项目所用的版本
> Vue.js:3.0.5

> Electron:11.2.2

> Node:12.18.3

> 下面的说明都只是工作在 electron:serve | electron:build 下
// Only works in electron serve/build
// Will not work in renderer process unless you enable nodeIntegration
// Expects package.json to be placed in public folder => 【path.join(path.resolve('.'), 'package.json')】这是拿到项目的绝对路径 + 'package.json'的路径

> 工作在 serve | build 下 都会是下面的处理 因为web只是运行在浏览器环境 无法访问Node.js API
> vue.config.js:5 此行设置为 nodeIntegration:false 或者无此行,删除此行
> ☆ 此项目不可以直接在vue组件页面,使用node进行后端操作,因为这就只是在浏览器环境中.
> src/components/poem/poem.vue:39
> console.log('...poem.vue node os..arch() -> ', require('os').arch(), '...poem.vue node os..platform() -> ', require('os').platform()) 
> // ...poem.vue node os..arch() ->  javascript ...poem.vue node os..platform() ->  browser

> 如果开启 让 vue.config.js:5 此行设置为 nodeIntegration:true
> ☆ 此项目可直接在vue组件页面,使用node进行后端操作,因为这node开发环境可以有效启用.
> src/components/poem/poem.vue:39
> console.log('...poem.vue node os..arch() -> ', require('os').arch(), '...poem.vue node os..platform() -> ', require('os').platform()) 
> // ...poem.vue node os..arch() ->  x64 ...poem.vue node os..platform() ->  win32

> 划重点:
> nodeIntegration:true, // 控制是否集成node,要从渲染过程中(渲染进程)访问Node.js API,您需要设置 nodeIntegration 选项为 true
> 目前此项目开启，其 Electron 在主进程和渲染进程中都暴露了对 Node.js API 及其模块的完全访问权限.
```

# 添加路由
```markdown
> npm install vue-router@4 -s

vuejs/vue-router-next: The Vue 3 official router
https://github.com/vuejs/vue-router-next

Home | Vue Router
https://next.router.vuejs.org/
```
## router/index.js
```javascript
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home'
import Poem from "../components/poem/poem"
import About from "../components/About"

// mode:"history"
// const routerHistory = createWebHistory()

// mode:"hash模式"
const routerHistory = createWebHashHistory()

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/poem',
        name: 'poem',
        component: Poem
    }
]

export default createRouter({
    history: routerHistory,
    routes
})

```

## 挂载路由

```javascript
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
或者写成
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

```

# 添加axios
```markdown
> npm install axios -s

Vue3全局使用axios_Adoro的博客-CSDN博客
https://blog.csdn.net/Adoro/article/details/113250379
```

## 添加axios之后 配置main.js
```javascript
import App from './App.vue'
import router from './router'

import axios from 'axios'

// 定义app
const app = createApp(App)
// 绑定全局属性
app.config.globalProperties.$axios = axios
// 使用路由
app.use(router).mount('#app')
```

# 跨域问题
```markdown
具体看 vue.config.js 中 line 68的具体proxy配置.
```

## 判断是开发环境还是生产环境
```javascript
// 根据判断是开发环境还是生产环境的结果 使用对应url了
// 定义全局url
let full_jinrishici_url = ''
// 判断是否是开发环境 是开发环境的话 为true
const isDevelopment = process.env.NODE_ENV !== 'production'
if (isDevelopment) { // 是开发环境 使用自己跨域处理的接口链接
    full_jinrishici_url = 'http://localhost:6886/getAPoem'
} else { // 是生产环境 使用今日诗词官方的接口链接
    full_jinrishici_url = 'https://v2.jinrishici.com/one.json'
}
```

# run it.
> 很多命令npm run * 具体请看package.json的"scripts".
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve

注意:
在my-electron-vue3-app\vue.config.js中修改web端口
 devServer: {
        port: 6886
    }

执行成功输出:
  App running at:
  - Local:   http://localhost:6886/
  - Network: http://192.168.0.16:6886/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Compiles the electron and hot-reloads for development
```
npm run electron:serve
```

### Compiles the electron and minifies for production
```
# 快速打包 配置说明
项目根目录创建 .npmrc 文件
填入如下内容，并保存，这一步是为了加快打包速度：
ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
ELECTRON_BUILDER_BINARIES_MIRROR=http://npm.taobao.org/mirrors/electron-builder-binaries/

# 执行输入如下指令即可打包
npm run electron:build

# 打包electron
这里是使用electron-builder进行打包
编译为win64下的安装包
执行命令:
> npm run electron:build
或者纯打安装包 不好使 不可用
> npm run app:win64

如需编译为win32下的安装包
放开下面代码注释即可
win32 -> vue.config.js:36 
或者纯打安装包 不好使 不可用
> npm run app:win32

如需编译mac下的安装包
"app:mac": "electron-builder --mac"
直接执行命令: 不好使 不可用
> npm run app:mac

备注:
"app:win32": "electron-builder --win --ia32",
"app:win64": "electron-builder --win --x64",
"app:mac": "electron-builder --mac"
在此项目都不好使 不可用.
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 官方项目地址和开发文档Docs
```markdown
nklayman/vue-cli-plugin-electron-builder: Easily Build Your Vue.js App For Desktop With Electron
https://github.com/nklayman/vue-cli-plugin-electron-builder

Vue CLI Plugin Electron Builder
https://nklayman.github.io/vue-cli-plugin-electron-builder/

Quick Start | Vue CLI Plugin Electron Builder
https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/

Security | Vue CLI Plugin Electron Builder
https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration

Guide | Vue CLI Plugin Electron Builder
https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/guide.html#handling-static-assets
```

# About me

```
https://github.com/ahviplc

https://github.com/ahviplc/my-electron-vue3-app

https://github.com/ahviplc/my-electron-vue3-app.git
```

---
> 官方版 electron demo 请去下面链接

> ahviplc/my-electron-app: my-electron-app demo by LC.
https://github.com/ahviplc/my-electron-app

---
> 基于 vue (基本上是它听起来的样子) 来构造 electron 应用程序的样板代码 electron-vue demo 请去下面链接 技术栈版本低一点

> ahviplc/my-electron-vue-app: a demo of the electron-vue by LC.
https://github.com/ahviplc/my-electron-vue-app

