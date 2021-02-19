<template>
    <!-- 要给外层div指定合适的宽度 -->
    <div style="width:600px;margin-top:20px;margin-left:99px">
        <baidu-calendar @change="change" :date="date" :range="range"/>
    </div>
</template>

<script>
    import {ref} from "vue";
    export default {
        /* 使用vue3的composition API */
        setup() {
            //date改变触发事件
            const change = (obj) => {
                console.log('百度日历组件 对象 obj -> ', obj)
            }
            // const date = ref("2021-1-27") //设置日期，若不设置，则默认为今天
            const date = ref("") //设置日期，若不设置，则默认为今天
            const range = [1900, 2088] //设置年份范围 默认[2010,2030]
            return {
                change,
                date,
                range
            }
        }
    }
</script>

<style></style>
