// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/sass/main.scss'

const files = require.context('./components/main/learnings/notes', false, /\.vue$/)

files.keys().forEach(key => {
  Vue.component(key.replace(/\.\/|\.vue/g, '').replace(/\_/g, ''), files(key).default)
})

Vue.config.productionTip = false
Vue.use(elementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
