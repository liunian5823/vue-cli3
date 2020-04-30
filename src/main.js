import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import axios from "axios";
import Vueaxios from "vue-axios";
import httpsapi from "./api/api";
Vue.use(Vueaxios, axios)
Vue.prototype.Home = '/api'
Vue.prototype.$baseAPI = httpsapi
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
