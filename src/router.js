import Vue from 'vue'
import Router from 'vue-router'
import EventSelection from './views/EventSelection'
import Test from './views/Test'
import Cards from './views/Cards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
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
  ]
})
