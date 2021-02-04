<template>
    <div>
        <p class="title">{{msg}}-{{title}}~{{author}}</p>
        <div>
            <div class="doc">
                <button class="alt" type="primary" plain="true" @click="getAPoem">点我获取今日诗词</button>
                <button class="alt" type="primary" @click="getAPoem">Get a Poem</button>
                <button class="alt" type="primary" @click="feedbackHandle">意见反馈,讲述你的意见</button>
                <button class="alt" type="primary" @click="goBackHandle">返回上一页</button>
                <button class="alt" type="primary" @click="goBackIndexHandle">返回首页</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'poem',
        data() {
            return {
                title: 'hello world poem',
                msg: '今日诗词',
                author: 'LC'
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
            getAPoem() {
                console.log('Get a Poem...')
                // httpbin接口
                // let httpbin_url = 'http://httpbin.org/get'
                // 解决跨域问题 跨源资源共享 (CORS) 在vue.config.js:68中 配置 proxy 具体去看 vue.config.js:68 .
                // 如果 vue.config.js:68 配置跨域 配置【 "target": "https://v2.jinrishici.coms",】,故意写错加个s
                // 则会报错为【 Error occurred while trying to proxy request /one.json from localhost:6886 to https://v2.jinrishici.coms (ENOTFOUND) (https://nodejs.org/api/errors.html#errors_common_system_errors).】
                // 今日诗词接口url 其实际全url: https://v2.jinrishici.com/one.json 其cors实际全url: http://localhost:6886/one.json 和 http://localhost:6886/getAPoem 均可
                // let baseURL = 'https://v2.jinrishici.com'
                // 运行访问 使用下面url 此url的ip为本地ip 解决跨域url
                // eslint-disable-next-line camelcase
                // let baseURL_cors = 'http://localhost:6886'
                // eslint-disable-next-line camelcase
                // let jinrishici_url = '/one.json'
                // ☆备注:在【src/background.js:23】配置好 webSecurity: false 之后,无论是开发还是生产环境,直接使用full_jinrishici_url也都是可以的了,无跨域问题了 已经实践证明 当然这个只是electron 不是web web是其他解决途径
                // 要是web的话 还是 放开 line60 的注释 使用这个 配合 vue.config.js:68 起作用. 现在根据判断是开发环境还是生产环境的结果 使用对应url了 在line63-line71
                // eslint-disable-next-line camelcase
                // let full_jinrishici_url = 'https://v2.jinrishici.com/one.json'
                // eslint-disable-next-line camelcase
                // let full_jinrishici_url_cors = 'http://localhost:6886/getAPoem'
                // let full_jinrishici_url = 'http://localhost:6886/getAPoem'

                // 定义全局url
                let full_jinrishici_url = ''
                // 判断是否是开发环境 是开发环境的话 为true
                const isDevelopment = process.env.NODE_ENV !== 'production'
                if (isDevelopment) { // 是开发环境 使用自己跨域处理的接口链接
                    full_jinrishici_url = 'http://localhost:6886/getAPoem'
                } else { // 是生产环境 使用今日诗词官方的接口链接
                    full_jinrishici_url = 'https://v2.jinrishici.com/one.json'
                }

                // -------------------------------------------------------
                // axios.get(jinrishici_url)
                //   .then((res) => {
                //     console.log(res)
                //   })
                //   .catch((err) => {
                //     console.log('err -> ', err)
                //   })
                // --------------------------------------------------------
                // 备注: 如果前面没有 【import axios from 'axios'】 则使用 this.$axios 即可.
                axios({
                    // baseURL: baseURL_cors,
                    method: 'get',
                    url: full_jinrishici_url,
                    // `headers` 是即将被发送的自定义请求头
                    headers: {
                        'X-User-Token': '7yzsEYo2vZ3zwBG+yfTtWtblmvFbz7QD' // 获取 Token 的地址为【https://v2.jinrishici.com/token】,GET方法,Token 用于鉴别和区分每个用户，获取后 永久有效。
                    }
                }).then((res) => {
                    console.log(res.data) // 这个本身就是对象了
                    console.log('Get a Poem...success data -> ', JSON.stringify(res.data))
                    // console.log('data content -> ', res.data.data.content)
                    let getAPoemFromApi = res.data.data.content
                    console.log(`Get a Poem...今日诗词:`, getAPoemFromApi)
                    alert(getAPoemFromApi)
                }).catch((err) => {
                    console.log('Get a Poem err -> ', err)
                })
                // --------------------------------------------------------
            },
            feedbackHandle() {
                console.log('收到你的反馈意见了...')
                alert('收到你的反馈意见了...')
            },
            goBackHandle() {
                this.$router.go(-1) // 返回上一页
            },
            goBackIndexHandle() {
                this.$router.push('/') // 返回首页
            }
        }
    }
</script>

<style scoped>
    button {
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 3px;
    }

    .title {
        color: #333333;
        font-size: 22px;
        text-align: center;
    }

    .doc button {
        font-size: .8em;
        cursor: pointer;
        outline: none;
        padding: 0.75em 2em;
        border-radius: 2em;
        display: inline-block;
        color: #fff;
        background-color: #4fc08d;
        transition: all 0.15s ease;
        box-sizing: border-box;
        border: 1px solid #4fc08d;
    }

    .doc button.alt {
        color: #42b983;
        background-color: transparent;
    }
</style>
