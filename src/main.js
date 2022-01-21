import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Vueaxios from "vue-axios";
import httpsapi from "./api/api";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vueaxios, axios)
Vue.prototype.Home = process.env.VUE_APP_LOGOUT_URL
Vue.prototype.$baseAPI = httpsapi
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
