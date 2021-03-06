import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nutrition from '@/components/Nutrition'
import Navy from '@/components/Navy'
import Macros from '@/components/Macros'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lp',
      name: 'Nutrition',
      component: Nutrition
    }, 
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ]
})
