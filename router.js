import Vue from 'vue'
import Router from 'vue-router'
import { auth } from '~/plugins/firebase'

import index from '~/views/index.vue'
import login from '~/views/login.vue'
import signup from '~/views/signup.vue'
import home from '~/views/home.vue'
import sets from '~/views/sets.vue'
import settings from '~/views/settings.vue'
import folders from '~/views/folders.vue'
import classes from '~/views/classes.vue'
import create_set from '~/views/create-set.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: index
      },
      {
          path: '/login',
          name: 'login',
          component: login
      },
      {
          path: '/signup',
          name: 'signup',
          component: signup
      },
      {
          path: '/home',
          component: home,
          name: 'home',
          meta: { requiresAuth: true }
      },
      {
        path: '/settings',
        component: settings,
        name: 'settings',
        meta: { requiresAuth: true }
      },
      {
        path: '/:user/sets',
        component: sets,
        name: 'sets',
        meta: { requiresAuth: true }
      },
      {
        path: '/:user/folders',
        component: folders,
        name: 'folders',
        meta: { requiresAuth: true }
      },
      {
        path: '/:user/classes',
        component: classes,
        name: 'classes',
        meta: { requiresAuth: true }
      },
      {
        path: '/create-set',
        component: create_set,
        name: 'create-set',
        meta: { requiresAuth: true }
      }
    ]
  })

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  auth.onAuthStateChanged(user => {
    requiresAuth && !user ? next({path: '/login'}) : next()
    user && !requiresAuth ? next({path: '/home'}) : next()
  })
});
  
export function createRouter() {
    return router
}