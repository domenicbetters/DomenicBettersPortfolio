
import MainPage from "@/views/MainPage.vue"
import ResumePage from "@/views/ResumePage.vue"
import ProjectsPage from "@/views/ProjectsPage.vue"
import VueRouter from 'vue-router'
import Vue from 'vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Main' }
  },
    {
      path: "/DomenicBettersPortfolio",
      name: "Main",
      component: MainPage
    },
    {
      path: "/DomenicBettersPortfolio/resume",
      name: "Resume",
      component: ResumePage
    },
    {
      path: "/DomenicBettersPortfolio/projects",
      name: "Projects",
      component: ProjectsPage
    },
    
  ]

  const router = new VueRouter({
    routes,
    mode: 'history',
 })
  
  export default router