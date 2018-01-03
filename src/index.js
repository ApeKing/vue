import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import style from './css/index.css'

const vm = new Vue({
  el: '#app',
  router:router,
  render: function (handler) {
    return handler(App)
  }
})