<template>
    <div>
        <button @click="changeIsTrue()">你的口头禅？</button>
        <!--只有是electron环境 不是浏览器环境 才显示下面的按钮-->
        <button v-if="isInNodeIntegration" @click="README()" class="about">README</button>
        <div v-if="isTrue" class="about">
            {{say}}~{{name}}
        </div>
        <!--引入自己diy的组件 在需要的地方 按照如下形式 引入即可-->
        <!--以下形式均可-->
        <!-- <diyComponent></diyComponent> -->
        <!-- <diy-Component></diy-Component> -->
        <!-- <diy-component></diy-component> -->
        <!-- <diy-component/> -->
        <!-- <diyComponent/> -->
        <div>
            <diyComponent/>
        </div>
    </div>
</template>

<script>
    // 导入Message使用 ElMessage 从element-plus中
    import {ElMessage} from 'element-plus'
    // =============================================
    console.log('...env begin...')
    // isInBrowser为true就是浏览器环境中
    console.log('...亲,你目前在如下环境 os.platform() -> ', require('os').platform())
    const isInBrowser = require('os').platform() === 'browser'
    console.log('...isInBrowser...为true就是在浏览器环境中... -> ', isInBrowser)
    console.log('...isInNodeIntegration...为true就是在electron环境中... -> ', !isInBrowser)
    // const isInNodeIntegration = require('os').platform() === 'win32' // 此行废弃 因为在 mac中就不是这个值了 还是判断 isInBrowser 最好,取反就是 isInNodeIntegration
    console.log('...env end...')
    // =============================================
    export default {
        name: "About",
        data() {
            return {
                name: 'LC',
                say: 'One person, One world, One tree, One Bodhi ！一人一世界，一树一菩提！',
                isTrue: false,
                isInBrowser: isInBrowser,
                isInNodeIntegration: !isInBrowser
            }
        },
        beforeCreate() {
            console.log('...beforeCreate...')
        },
        created() {
            console.log('...created...')
        },
        beforeMount() {
            console.log('...beforeMount...')
        },
        mounted() {
            console.log('...mounted...')
            // 直接 this.$axioe() 使用
            this.$axios({
                method: 'get',
                url: 'http://httpbin.org/get',
                // `headers` 是即将被发送的自定义请求头
                headers: {
                    'X-User-Token': 'lc' // headers
                }
            }).then((res) => {
                console.log('...About.vue...mounted()...res -> ', res) // 这个本身就是对象了
                console.log('...About.vue...mounted()...res.data -> ', res.data) // 这个本身就是对象了
                // 直接 this.$ep.ElMessage() 使用
                this.$ep.ElMessage(JSON.stringify(res.data))
            }).catch((err) => {
                console.log('...About.vue...mounted()...err... -> ', err)
            })
        },
        methods: {
            README() {
                console.log('...开始读取...')
                const fs = require('fs')
                const path = require('path')
                // console.log('...About.vue node os..arch() -> ', require('os').arch(), '...About.vue node os..platform() -> ', require('os').platform())
                const fileLocation = path.join(path.resolve('.'), 'package.json')
                console.log('...About.vue...fileLocation -> ', fileLocation);
                try {
                    const fileContents = fs.readFileSync(fileLocation, 'utf8')
                    // console.log(fileContents)
                    const packageObj = JSON.parse(fileContents)
                    // console.log(packageObj)
                    console.log('packageObj.author -> ', packageObj.author, 'packageObj.version -> ', packageObj.version)
                    // packageObj.author ->  LC packageObj.version ->  0.1.0
                    // alert('...读取成功... Data -> ' + ' packageObj.author -> ' + packageObj.author + ' packageObj.version -> ' + packageObj.version)
                    ElMessage('...读取成功... Data -> ' + ' packageObj.author -> ' + packageObj.author + ' packageObj.version -> ' + packageObj.version)
                } catch (e) {
                    // 错误处理
                    console.log('...About.vue...Error -> ', e);
                    // 弹出错误消息
                    ElMessage({
                        showClose: true,
                        message: e.toString(),
                        duration: 2000,
                        type: 'error'
                    });
                }
            },
            changeIsTrue() {
                this.isTrue = !this.isTrue;
                // ElMessage提示
                // ElMessage(this.say + '!~' + this.name)
                // 可关闭写法
                ElMessage({
                    showClose: true,
                    message: this.say + '!~' + this.name,
                    duration: 1500
                });
            }
        }
    }
</script>

<style scoped>
    .about {
        margin-top: 30px;
        margin-left: 10px;
        color: #42b983;
    }
</style>
