import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/account/LoginView.vue'
import RegisterView from '@/views/account/RegisterView.vue'
import RoomView from '@/views/rooms/RoomView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import ExploreView from '@/views/rooms/ExploreView.vue'
import AboutView from '@/views/suporte/AboutView.vue'
import HelpView from '@/views/suporte/HelpView.vue'
import EditProfileView from '@/views/user/EditProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'Cadastro',
      component: RegisterView,
    },
    {
      path: '/room',
      name: 'Sala',
      component: RoomView
    },
    {
      path: '/about',
      name: 'Sobre',
      component: AboutView,
    },
    {
      path: '/help',
      name: 'Ajuda',
      component: HelpView,
    },
    {
      path: '/explore',
      name: 'Explorar',
      component: ExploreView,
    },
    {
      path: '/profile',
      name: 'Perfil',
      component: ProfileView,
    },
    {
      path: '/edit',
      name: 'Editar',
      component: EditProfileView,
    },
  ],
})

export default router
