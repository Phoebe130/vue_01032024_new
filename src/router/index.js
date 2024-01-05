import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 當真的進入此網址的時候，才會讀入
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
      path:"/calc",
      name:"calc",
      component:()=>import('../views/CalcView.vue')
    },
    {
      path:"/todolist",
      name:"todolist",
      component:()=>import('../views/TodoList.vue')
    }    ,
    {
      path:"/uploadpic",
      name:"uploadpic",
      component:()=>import('../views/PicUpload.vue')
    }
  ]
})

export default router
