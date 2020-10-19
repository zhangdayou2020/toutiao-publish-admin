/**
 * 基于axios 封装的请求模块
 */
import axios from 'axios'
// 创建一个axios 实例
//  我们通过这个实例发请求，把需要的配置，配置给这个实例
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础路径
})
//  导出请求方法
export default request
// 谁要使用谁就加载request模块