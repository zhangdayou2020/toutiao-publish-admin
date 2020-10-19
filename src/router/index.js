import Vue from 'vue'
import VueRouter from 'vue-router'
//  在VueCLI 创建的项目中 @表示src 目录
//  它是src目录的路径别名
// 好处就是不受当前文件路径影响
//  @就是src路径，后面别忘了写 斜杠
// 使用建议： 如果加载的资源路径在当前目录下，就正常写
// 如果需要进行父级路径查找的都使用@
import Login from '@/views/login/index.vue'

Vue.use(VueRouter)
// 路由配置表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
