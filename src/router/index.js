import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import _ from 'lodash'

window._=_

Vue.use(Router)
Vue.prototype._ = _

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
