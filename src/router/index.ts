import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'ГЛАВНАЯ'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    meta: {
      title: 'ПРОФИЛЬ'
    }
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import('../views/BasketView.vue'),
    meta: {
      title: 'КОРЗИНА'
    }
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/ProfileView.vue'),
    meta: {
      title: 'ПРОФИЛЬ'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue'),
    meta: {
      title: 'ПОИСК?'
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/AuthView.vue'),
    meta: {
      title: 'Авторизация'
    }
  },
  {
    path: '/DetailedCard/:id',
    name: 'DetailedCard',
    component: () => import('../components/Cards/DetailedCard.vue'),
    meta: {
      title: 'Имя карточки'
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  document.title = `GADJET.NET | ${to.meta.title}`
  next()
})

export default router
