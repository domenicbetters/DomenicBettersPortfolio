
import MainPage from "@/views/MainPage.vue"
import VueRouter from 'vue-router'
import Vue from 'vue'


Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "Main",
      component: MainPage
    },
      
  ]

  const router = new VueRouter({
    routes,
    mode: 'history'
 })
  
  export default router