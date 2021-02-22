<template>
    <div class="hello">
        <h1>{{ msg }} - {{title}}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
        <h3>Diy !~{{author}}</h3>
        <ul>
            <li>
                <p>【from HelloWorld.vue 子组件 -> 姓名：{{ myName }}】</p>
                <button @click="oneClick">oneClick</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
            myName: String
        },
        data() {
            return {
                title: 'hello world',
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
            oneClick() {
                const msgTemp = '...HelloWorld.vue...点我干嘛?点我会触发父组件中的自定义事件,触发在父组件中的方法,从而改变父组件Home.vue中myNameFather字段的值,也就是会改变姓名myName'
                // 点击子组件按钮oneClick时 使用this.$emit()触发父组件中的自定义事件,触发在父组件中的方法,从而改变父组件Home.vue中myNameFather字段的值,也就是会改变姓名myName
                // alert(msgTemp)
                this.$ep.ElMessage(msgTemp)
                console.log(msgTemp)
                // 使用$emit在子组件中调用父组件的方法并传递数据
                // 调用父组件中的自定义事件,触发其方法
                // chageName为父组件Home.vue中自定义的触发方法 使用this.$emit('changeName','LC')接收自定义触发事件 触发此方法
                this.$emit('changeName', '改变之后,你就是LC了')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
