import myDiyComponent from './diy-component.vue'

/**
 * Vue自定义组件(简单实现一个自定义组件) - SegmentFault 思否
 * https://segmentfault.com/a/1190000018031560
 *
 * @type {{install(*): void}}
 */
// ====================================================================
// 写法一
const diyComponent = {
    install(app) {
        app.component('diyComponent', myDiyComponent)
    }
}
export default diyComponent
// ====================================================================

// ====================================================================
// 写法二
// export {
//     myDiyComponent
// }
// const install=(app)=>{
//     app.component('diyComponent',myDiyComponent)
// }
// export default {
//     install
// }
// ====================================================================

// ====================================================================
// 如何使用
// <!--引入自己diy的组件 在需要的地方 按照如下形式 引入即可-->
// <div>
//     <diyComponent></diyComponent>
// </div>
// ====================================================================
