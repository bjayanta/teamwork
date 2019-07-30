import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Project from './views/Project.vue'
import Team from './views/Team.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    }
  ]
})
