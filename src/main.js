import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

// 导入axios
import axios from 'axios'

// 定义app
const app = createApp(App)
// 绑定全局属性
app.config.globalProperties.$axios = axios
// 使用路由
app.use(router).mount('#app')
