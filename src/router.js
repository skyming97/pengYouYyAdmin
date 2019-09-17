import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          name: 'welcome',
          component: () => import('./views/welcome.vue')
        },
        {
          path: '/realtimeOnline',
          name: 'real-timeOnline',
          component: () => import('./views/real-timeData/online.vue'),
          meta: { title: ['实时数据', '实时在线'] }
        }, 
        {
          path: '/realtimeAdd',
          name: 'real-timeAdd',
          component: () => import('./views/real-timeData/add.vue'),
          meta: { title: ['实时数据', '实时新增'] }
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

export default router
