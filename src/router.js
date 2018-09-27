import Vue from 'vue'
import Router from 'vue-router'
import EventSelection from './views/EventSelection'
import Test from './views/Test'
import Card from './views/Card'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path: '/events',
      name: 'event',
      component: EventSelection
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
