import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CardSite from '../views/CardSite.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: HomeView },
      { path: '/login', component: LoginView },
      { path: '/forgot-password', component: CardSite },
      { path: '/:pathMatch(.*)', component: CardSite }
  ],
  linkActiveClass: "active",
})

router.beforeEach((to, from, next) => {
  const userData = localStorage.getItem("userData");
  if (to.path == '/home' && userData == "{}"){
    return next({ path: '/login' })
  }else if(to.path == '/login' && userData != "{}"){
    return next({ path: '/home' })
  }
  return next();
})

export default router;