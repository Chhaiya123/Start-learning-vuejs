import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import SearchPracticeView from '@/views/SearchPracticeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/works',
      name: 'works',
      component: WorkView,
    },
    {
      path: '/search_practice',
      name: 'search_practice',
      component: SearchPracticeView,
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: SearchPracticeView,
    },

  ],
})

export default router
