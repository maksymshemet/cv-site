import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueStatic from 'vue-static'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/assets/styles.scss'

Vue.use(VueStatic,{
  namespaced: false,
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
