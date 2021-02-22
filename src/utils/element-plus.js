// 封装element-plus工具类
// 从element-plus导出某些组件

// Message 消息提示
import {ElMessage} from 'element-plus'

// 灵活封装导出使用element-plus的各个组件
// 然后再src/main.js绑定全局属性 ep
// 使用方法
// 在需要使用的地方直接  this.$ep.ElMessage('你好') 即可使用
const ep = {
    ElMessage
}

// 默认导出 ep
export default ep
