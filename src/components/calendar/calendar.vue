<template>
    <button class="alt" type="primary" @click="goBackIndexHandle">返回首页</button>
    |
    <button class="alt" type="primary" @click="sayHi">说你好,vue3的Composition API驱动</button>
    <!-- 要给外层div指定合适的宽度 -->
    <div style="width:600px;margin-top:20px;margin-left:99px">
        <baidu-calendar @change="change" :date="date" :range="range"/>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';

    export default {
        /* 使用vue3的 Composition API */
        setup() {
            // 路由router
            const router = useRouter();

            // date改变触发事件
            const change = (obj) => {
                console.log('...calendar.vue...百度日历组件 对象 obj -> ', obj)
            }

            // const date = ref("2021-1-27") // 设置日期，若不设置，则默认为今天
            const date = ref("") // 设置日期，若不设置，则默认为今天
            const range = [1900, 2088] // 设置年份范围 默认[2010,2030]

            // 返回首页函数方法
            const goBackIndexHandle = () => {
                console.log('...calendar.vue...返回首页...使用vue3路由...')
                router.push('/') // 返回首页
            }

            // sayHi函数方法
            function sayHi() {
                console.log('...calendar.vue...sayHi()...')
                alert('你好,vue3')
            }

            return {
                change,
                date,
                range,
                goBackIndexHandle,
                sayHi
            }
        }
    }
</script>

<style></style>
