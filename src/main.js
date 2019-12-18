import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import service from "./http"
import dayjs from "dayjs"
import axios from 'axios'

Vue.use(ElementUI)

Vue.prototype.$axios = service
Vue.prototype.$dayjs = dayjs
Vue.config.productionTip = false


// axios.defaults.timeout = 1000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.interceptors.response.use(
//     response => {
//         return response.data
//     }, error => {
//         return Promise.reject(error)
//     })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')