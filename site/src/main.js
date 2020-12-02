// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@vant/touch-emulator'
import { Search, Icon, Popup, Cell, CellGroup, Tag, Divider, Skeleton } from 'vant'
import infiniteScroll from 'vue-infinite-scroll'
import App from './App'
import router from './router'
import moment from 'moment'
import axios from "axios"
Vue.prototype.bus = new Vue()
Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.prototype.$axios = axios
Vue.use(infiniteScroll).use(Search).use(Icon).use(Popup).use(Cell).use(CellGroup).use(Tag).use(Divider).use(Skeleton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

