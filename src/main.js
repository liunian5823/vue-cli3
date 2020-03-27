import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Element from 'element-ui'
import VueAxios from 'vue-axios'
import baseAPI from './api/api'
Vue.use(VueAxios, axios)
Vue.use(Element)
Vue.prototype.$baseAPI = baseAPI
Vue.prototype.HOME = ''
Vue.config.productionTip = false
console.log(process.env)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
