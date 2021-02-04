<template>
    <div>
        <button @click="changeIsTrue()">你的口头禅？</button>
        <div v-if="isTrue" class="about">
            {{say}}~{{name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                name: 'LC',
                say: 'One person, One world, One tree, One Bodhi ！一人一世界，一树一菩提！',
                isTrue:false
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
                alert('点我干嘛?')
                console.log('点我干嘛?')
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
       color: #42b983;
   }
</style>
