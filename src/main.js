import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

// 导入axios
import axios from 'axios'

// 定义app
const app = createApp(App)
// 绑定全局属性
app.config.globalProperties.$axios = axios

// 导入vue-baidu-calendar并使用
import BaiduCalendar from "vue-baidu-calendar"

app.use(BaiduCalendar)

// 使用路由router
app.use(router).mount('#app')
