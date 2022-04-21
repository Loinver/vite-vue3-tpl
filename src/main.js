/*
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2021-03-31 10:22:38
 * @LastEditors: Linyer
 * @LastEditTime: 2022-02-11 15:54:10
 */
import { createApp } from 'vue'
import 'normalize.css'
import 'assets/styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './apis'

const app = createApp(App)
app.config.globalProperties.$api = api // api绑定到this上
// 挂载路由及状态存储
app.use(router).use(store).mount('#app')
