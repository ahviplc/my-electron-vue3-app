# my-electron-vue3-app

> a demo of the electron-vue3 by LC.

> electron与vue-cli3.0脚手架做了很好的融合.

> 按照下面网址这个教程-新建了vue3和electron整合项目 my-electron-vue3-app

> electron-vue 安装环境、构建+打包（mac和windows）这一篇就够了_阿毛sky的博客-CSDN博客
  https://blog.csdn.net/qq_32244819/article/details/110820687

# 技术栈
```markdown
此my-electron-vue-app 使用技术栈以及其版本 比较新的版本 也就是按照上面教程初始化项目所用的版本
> Vue.js:3.0.5

> Electron:11.2.2

> Node:12.18.3

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

