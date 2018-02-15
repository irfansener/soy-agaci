import Vue from 'vue'
import Router from 'vue-router'
import Anasayfa from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Anasayfa',
      component: Anasayfa
    }
  ]
})
