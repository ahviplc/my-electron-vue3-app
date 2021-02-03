'use strict'

import {app, protocol, BrowserWindow} from 'electron'
import {createProtocol} from 'vue-cli-plugin-electron-builder/lib'
// import installExtension, {VUEJS_DEVTOOLS} from 'electron-devtools-installer'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
    {scheme: 'app', privileges: {secure: true, standard: true}}
])

async function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // Use pluginOptions.nodeIntegration, leave this alone
            // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
            nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
            webSecurity: false,// 这个是为了解决编译打包之后安装到自定义文件夹下无法正常运行 报错 Not allowed to load local resource: file:///D:/#diyappelec\my-electron-vue-app\resources\app.asar\dist\electron/index.html
            // 这里Electron版本是11.2.2,需下面配置为true 才可以使用remote
            // 在electron 10.0.0之后，remote模块默认关闭
            // 必须手动设置webPreferences中的enableRemoteModule为true之后才能使用
            // 这里待验证 目前无法使用
            enableRemoteModule: true
        }
    })

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        if (!process.env.IS_TEST) win.webContents.openDevTools()
    } else {
        createProtocol('app')
        // Load the index.html when not in development
        win.loadURL('app://./index.html')
    }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    // 这里先不安装Vue Devtools了 因网络问题 不好安装 导致electron执行缓慢
    // if (isDevelopment && !process.env.IS_TEST) {
    //   // Install Vue Devtools
    //   try {
    //     await installExtension(VUEJS_DEVTOOLS)
    //   } catch (e) {
    //     console.error('Vue Devtools failed to install:', e.toString())
    //   }
    // }

    // 这里使用await console输出一下
    await awaitConsole()

    // 其他一些输出
    console.log('background.js app.on ready process.env.IS_TEST -> ', process.env.IS_TEST)
    console.log('background.js app.on ready process.env.WEBPACK_DEV_SERVER_URL -> ', process.env.WEBPACK_DEV_SERVER_URL)
    console.log('background.js app.on ready process.env.ELECTRON_NODE_INTEGRATION -> ', process.env.ELECTRON_NODE_INTEGRATION)
    console.log('background.js app.on ready process.versions.node -> ', process.versions.node)
    console.log('background.js app.on ready process.versions.electron -> ', process.versions.electron)
    console.log('background.js app.on ready vue -> ', require('vue/package.json').version)
    // 继续原来逻辑
    createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', (data) => {
            if (data === 'graceful-exit') {
                app.quit()
            }
        })
    } else {
        process.on('SIGTERM', () => {
            app.quit()
        })
    }
}

// just console.log()
function awaitConsole() {
    console.log('background.js app.on ready async await 输出一下')
}
