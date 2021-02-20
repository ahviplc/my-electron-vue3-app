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

// 导入ElementPlus并使用 其是ElementUI适配了vue3的组件
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
app.use(ElementPlus)

// 导入自己diy的组件
import diyComponent from './components/diy-component'
app.use(diyComponent)

app.use(BaiduCalendar)

// 使用路由router
app.use(router).mount('#app')
