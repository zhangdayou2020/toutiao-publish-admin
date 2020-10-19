/**
 * 项目的启动入口
 */
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
// 加载Element 组件库
import ElementUI from 'element-ui'
// 加载Element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'
// 加载全局样式文件
import './styles/index.less'

//  全局注册 Element组件库
Vue.use(ElementUI) 

Vue.config.productionTip = false
//  创建了 Vue 根实例
//  把router 配置到根实例中
// 通过render方法 把App 根组件渲染到 #app 入口节点
new Vue({
  router,
  store,
  render: h => h(App)
  // el:'#app'  // 等价于 $mount('#app')
}).$mount('#app')
