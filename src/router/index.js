
import MainPage from "@/views/MainPage.vue"
import ResumePage from "@/views/ResumePage.vue"
import VueRouter from 'vue-router'
import Vue from 'vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Main' }
  },
    {
      path: "/dbettersport",
      name: "Main",
      component: MainPage
    },
    {
      path: "/dbettersport/resume",
      name: "Resume",
      component: ResumePage
    },
      
  ]

  const router = new VueRouter({
    routes,
    mode: 'history',
 })
  
  export default router