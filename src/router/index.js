import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import home from '@/components/main/home'
import learnings from '@/components/main/learnings'
import knowledge from '@/components/main/knowledge'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home,
        },
        {
          path: '/learnings',
          name: 'learnings',
          component: learnings,
        },
        {
          path: '/know',
          name: 'knowledge',
          component: knowledge,
        }
      ]
    }
  ]
})
