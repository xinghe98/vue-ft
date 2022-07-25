import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'

const instance = axios.create({
  baseURL:'http://192.168.5.154:3000/api/'
})

instance.interceptors.request.use(
	config => {
	    if (localStorage.getItem("adminToken")) {
        console.log(localStorage.getItem("adminToken"))  // 判断是否存在token，如果存在的话，则每个http header都加上token
	        config.headers.Authorization = 'Bearer '+ localStorage.getItem("adminToken")
	    }
	    return config
	},
	err => {
	    return Promise.reject(err)
})

Vue.prototype.$http = instance
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
