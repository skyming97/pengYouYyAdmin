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
      path: '*',
      redirect: '/404',
    },
    {
      path: '/404',
      component: () => import('./views/404page.vue')
    },
    {
      path: '/home',
      component: () => import('./views/Home.vue'),
      children: [
        { path: '', name: 'welcome', component: () => import('./views/welcome.vue') },
        // ----------------实时数据---------------------
        { path: '/realtimeOnline', name: 'real-timeOnline', component: () => import('./views/real-timeData/online.vue'), meta: { title: ['实时数据', '实时在线'] } },
        { path: '/realtimeAdd', name: 'real-timeAdd', component: () => import('./views/real-timeData/add.vue'), meta: { title: ['实时数据', '实时新增'] } },
        // ----------------日常数据---------------------
        { path: '/loginData', component: () => import('./views/dailyData/loginData.vue'), meta: { title: ['日常数据', '登录数据'] } },
        // ----------------订单管理---------------------
        { path: '/dayOrder', component: () => import('./views/manageOfOrder/dayOrder.vue'), meta: { title: ['订单管理', '每日订单金额'] } },
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

/**
 * 路由前置守卫
 */
router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  // if (to.path.startsWith('/login')) {
  //   window.localStorage.removeItem('access-user')
  //   next()
  // } else if (to.path.startsWith('/register')) {
  //   window.localStorage.removeItem('access-user')
  //   next()
  // } else {
  //   let user = JSON.parse(window.localStorage.getItem('access-user'))
  //   if (!user) {
  //     next({ path: '/login' })
  //   } else {
  next()
  //   }
  // }
})

export default router
