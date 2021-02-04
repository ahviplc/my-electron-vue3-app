<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App!~LC"/>
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
        }
    }
</script>

<style scoped>

</style>

