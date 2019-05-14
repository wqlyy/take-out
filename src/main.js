import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './utils/register'
import './assets/common/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
