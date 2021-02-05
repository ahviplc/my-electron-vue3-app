<template>
    <div>
        <button @click="changeIsTrue()">你的口头禅？</button>
        <!--只有是electron环境 不是浏览器环境 才显示下面的按钮-->
        <button v-if="isInNodeIntegration" @click="README()" class="about">README</button>
        <div v-if="isTrue" class="about">
            {{say}}~{{name}}
        </div>
    </div>
</template>

<script>
    console.log('...env begin...')
    // isInBrowser为true就是浏览器环境中
    console.log('...亲,你目前在如下环境 os.platform() -> ', require('os').platform())
    const isInBrowser = require('os').platform() === 'browser'
    console.log('...isInBrowser...为true就是在浏览器环境中... -> ', isInBrowser)
    console.log('...isInNodeIntegration...为true就是在electron环境中... -> ', !isInBrowser)
    // const isInNodeIntegration = require('os').platform() === 'win32' // 此行废弃 因为在 mac中就不是这个值了 还是判断 isInBrowser 最好,取反就是 isInNodeIntegration
    console.log('...env end...')
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
        },
        methods: {
            README() {
                console.log('...开始读取...')
                const fs = require('fs')
                const path = require('path')
                // console.log('...About.vue node os..arch() -> ', require('os').arch(), '...About.vue node os..platform() -> ', require('os').platform())
                const fileLocation = path.join(path.resolve('.'), 'package.json')
                const fileContents = fs.readFileSync(fileLocation, 'utf8')
                // console.log(fileContents)
                const packageObj = JSON.parse(fileContents)
                // console.log(packageObj)
                console.log('packageObj.author -> ', packageObj.author, 'packageObj.version -> ', packageObj.version)
                // packageObj.author ->  LC packageObj.version ->  0.1.0
                alert('...读取成功... Data -> ' + 'packageObj.author -> ' + packageObj.author + 'packageObj.version -> ' + packageObj.version)
            },
            changeIsTrue(){
                this.isTrue = !this.isTrue;
            }
        }
    }
</script>

<style scoped>
   .about{
       margin-top: 30px;
       margin-left: 10px;
       color: #42b983;
   }
</style>
