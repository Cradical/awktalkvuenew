import Vue from 'vue'
import Router from 'vue-router'
import EventSelection from './views/EventSelection'
import Test from './views/Test'
import Cards from './views/Cards'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Test
    },
    {
      path: '/event',
      name: 'event',
      component: EventSelection
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
