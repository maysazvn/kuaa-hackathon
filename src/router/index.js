import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/account/LoginView.vue'
import RoomView from '@/views/rooms/RoomView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import ExploreView from '@/views/rooms/ExploreView.vue'
import AboutView from '@/views/suporte/AboutView.vue'
import HelpView from '@/views/suporte/HelpView.vue'
import EditProfileView from '@/views/user/EditProfileView.vue'
import SalaView from '@/views/rooms/SalaView.vue'
import Postagens from '@/components/Postagens/Postagens.vue'
import FilterPage from '@/components/filter/FilterPage.vue'

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
      path: '/room',
      name: 'Sala',
      component: RoomView,
    },
    {
      path: '/salas/:id',
      name: 'Salas',
      component: SalaView
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
      path: '/postagens',
      name: 'Postagens',
      component: Postagens
    },
    {
      path: '/edit',
      name: 'Editar',
      component: EditProfileView,
    },
    {
      path: '/filter',
      name: 'Pesquisa',
      component: FilterPage
    }
  ],
})

export default router
