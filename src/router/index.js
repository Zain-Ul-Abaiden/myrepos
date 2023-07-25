import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '@/views/SignUp.vue'
import Login from '@/views/Login.vue'
import Todos from '@/views/todos.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
   component: Signup
  },
  {
    path: '/login',
    name: 'login',
   component: Login
  },
  {
    path: '/todos',
    name: 'todos',
   component: Todos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
