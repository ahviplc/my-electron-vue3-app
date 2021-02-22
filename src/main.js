import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

// 导入axios 这里不导入了
// import axios from 'axios'
// 引入axios 自已封装的axios工具类【src/utils/axios.js】
import axios from "./utils/axios";

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

// 将再次封装的ElementPlus组件使用工具导入
import ep from './utils/element-plus'
// 绑定全局属性
app.config.globalProperties.$ep = ep

// 导入自己diy的组件
import diyComponent from './components/diy-component'

app.use(diyComponent)

app.use(BaiduCalendar)

// 使用路由router
app.use(router).mount('#app')
