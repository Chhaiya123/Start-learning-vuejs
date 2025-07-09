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
      name: 'work',
      component: WorkView,
    },
    {
      path: '/search_practice',
      name: 'search_practice',
      component: SearchPracticeView,
    },

  ],
})

export default router
