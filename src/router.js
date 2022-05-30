import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Frame2875 from './views/frame2875'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Frame2875',
      path: '/',
      component: Frame2875,
    },
  ],
})
