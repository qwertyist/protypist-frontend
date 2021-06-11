import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Join from '../views/Join.vue'
import Settings from '../views/Settings.vue'
import Help from '../views/Help.vue'
import Session from '../views/Session.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Startsida',
    component: Dashboard
  },
  {
    path: "/join",
    name: "Anslut",
    component: Join,
  },
  {
    path: "/session/:id",
    name: "Tolkning",
    component: Session
  },
  {
    path: "/settings",
    name: "Inställningar",
    component: Settings
  },
  {
    path: "/help",
    name: "Hjälp",
    component: Help
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
