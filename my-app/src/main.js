import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import "chart.js"
import "hchs-vue-charts"

Vue.config.productionTip = false

Vue.prototype.$axios = axios


Vue.use(window.VueCharts)

new Vue({
  render: h => h(App),
}).$mount('#app')
