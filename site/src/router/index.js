import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import notFound from '@/components/notFound'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/404',
      name: 'notFound',
      component: notFound
    }, {
      path: '*',
      redirect: '/404'
    }
  ]
})
