<template>
    <div>
        {{title}}
        <button @click="oneClick">{{title}}</button>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                title: '今日诗词',
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
                alert('今日诗词')
                console.log('今日诗词')
            }
        }
    }
</script>

<style scoped>

</style>
