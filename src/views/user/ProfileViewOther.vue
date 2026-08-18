<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { seguidores } from './Followers';
import { seguindo } from './Following';
import { users } from './Users';
import { ref } from 'vue';


const route = useRoute();

const usuario = computed(() => {
  return users.find(
    (usuario) => usuario.id === Number(route.params.id),
  )
})

const suarios = JSON.parse(localStorage.getItem('salasEntradas')) || []

const mostrarSala = ref(localStorage.getItem('mostrarSala?') || 'sim')

</script>

<template>
  <main class="container">
    <div v-if="usuario" class="cartaoPerfil">
      <img v-if="usuario.banner" :src="usuario.banner" class="banner" />
      <img v-if="usuario.pfp" :src="usuario.pfp" class="foto" />

      <div>
        <ul>
          <li class="seguidores">{{ seguidores.length }} Seguidores</li>
          <li class="seguindo">{{ seguindo.length }} Seguindo</li>
        </ul>
      </div>

      <div class="salas" v-show="mostrarSala === 'sim'">
      <ul>
        <li v-for="sala in suarios" :key="sala.id" :nome="sala.nome">
          <p>{{ sala.nome }}</p>
        </li>
      </ul>
    </div>

      <h1>{{ usuario.nome }}</h1>
      <p>{{ usuario.desc }}</p>
    </div>


    <div v-else>
      <p>Usuário não encontrado.</p>
    </div>
  </main>
</template>

<style scoped>

</style>