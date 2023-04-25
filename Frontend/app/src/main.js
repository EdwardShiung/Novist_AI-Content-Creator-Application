import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//PaperDashboard
import PaperDashboard from "./plugins/paperDashboard";
//MiddleWare For Paper Dashboard
Vue.use(PaperDashboard);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
