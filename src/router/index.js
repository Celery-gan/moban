import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Common from '../views/Common.vue'

Vue.use(VueRouter)

const routes = [{ //继承common样式的子路由home common中必有router-view 子路由路径继承父路由 '/'
        path: '/',
        component: Common,
        children: [{
            path: '',
            name: 'home',
            component: Home
        }, ]
    },
    { //继承common样式的子路由about common中必有router-view  子路由路径继承父路由 '/about'
        path: '/about',
        component: Common, //父路由common
        children: [{
            path: '',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue')
    },
    { //所以未定义路由 均跳转到错误页面
        path: '*',
        name: 'error',
        component: () =>
            import ('../views/Error')
    }
]


//  /*在跳转之前执行*/
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   let user = localStorage.getItem('user')
//   if (to.path === '/login' || to.path ==='/regiest') {
//     next()
//   } else {
//     user ? next() : next('/login')
//   }
// })


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// export default router