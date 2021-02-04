module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                'appId': 'com.lc',
                'productName': 'my-electron-vue3-app', // 项目名，也是生成的安装文件名，即my-electron-vue3-app.exe
                'copyright': 'LC Copyright © 2021', // 版权信息
                'files': [
                    './**/*'
                ],
                'extraFiles': [ // 把指定的资源复制到程序根目录，即把server文件夹的内容复制到程序根目录，这里server文件夹下的内容相当于我的后台，我在background.js中有相应的处理。
                    './server'
                ],
                'directories': {
                    'output': './dist_electron' // 输出文件路径
                },
                'nsis': {
                    'oneClick': false, // 是否一键安装
                    'allowElevation': true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
                    'allowToChangeInstallationDirectory': true, // 允许修改安装目录
                    'installerIcon': './public/icons/icon.ico', // 安装图标
                    'uninstallerIcon': './public/icons/icon.ico', // 卸载图标
                    'installerHeaderIcon': './public/icons/icon.ico', // 安装时头部图标
                    'createDesktopShortcut': true, // 创建桌面图标
                    'createStartMenuShortcut': true, // 创建开始菜单图标
                    'shortcutName': 'my-electron-vue3-app-lc' // 图标名称(项目名称)
                },
                'win': { // win相关配置
                    'icon': './public/icons/icon.ico', // 图标，当前图标在根目录下，注意这里有两个坑
                    "requestedExecutionLevel": "requireAdministrator", //获取管理员权限
                    'target': [{
                        'target': 'nsis', // 利用nsis制作安装程序
                        'arch': [
                            'x64', // win 64位
                            // 'ia32' // win 32位
                        ]
                    }]
                },
                "dmg": {
                    "contents": [
                        {
                            "x": 410,
                            "y": 150,
                            "type": "link",
                            "path": "/Applications"
                        },
                        {
                            "x": 130,
                            "y": 150,
                            "type": "file"
                        }
                    ]
                },
                "mac": {
                    "icon": "public/icons/icon.ico"
                },
                "linux": {
                    "icon": "public/icons"
                }

            }
        }
    },
    devServer: {
        port: 6886, // 项目启动端口
        // 配置proxy 解决跨域问题 跨源资源共享 (CORS)
        proxy: {
            '/one.json': {
                // 请求的目标服务器地址
                target: 'https://v2.jinrishici.com',
                // 设置允许跨域
                changeOrigin: true,
                // 重写路径
                pathRewrite: {
                    '^/one.json': '/one.json'
                },
                headers: {
                    referer: ''
                }
            },
            '/getAPoem': {
                // 请求的目标服务器地址
                target: 'https://v2.jinrishici.com',
                // 设置允许跨域
                changeOrigin: true,
                // 重写路径
                pathRewrite: {
                    '^/getAPoem': '/one.json'
                },
                headers: {
                    referer: ''
                }
            }
        }
    }
}
