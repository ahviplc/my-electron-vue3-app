<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App!~LC" :myName="myNameFather" @changeName="changeNameHandle"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    // import HelloWorld from './HelloWorld.vue'
    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        data() {
            return {
                myNameFather: '我是父组件Home.vue中的(myNameFather)姓名'
            }
        },
        methods: {
            changeNameHandle(name) {
                const msgTemp = '...Home.vue...$emit触发了我(changeNameHandle),改变myNameFather的值...'
                this.$ep.ElMessage({
                    showClose: true,
                    message: '...Home.vue...$emit触发了我(changeNameHandle),改变myNameFather的值...',
                    duration: 1500
                });
                console.log(msgTemp)
                // 改变myNameFather值
                this.myNameFather = name
            }
        }
    }
</script>

<style scoped>

</style>

