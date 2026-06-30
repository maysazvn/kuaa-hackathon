<script setup>

import { useRouter } from 'vue-router';
const router = useRouter()

function irCriarSala() {
  router.push('/room')
}

</script>

<template>
  <aside class="sidebar">
    <nav class="geral">
      <router-link to="/">
        <font-awesome-icon icon="house"/> Página Inicial
      </router-link>
      <router-link to="/explore">
        <font-awesome-icon icon="compass"/> Explorar
      </router-link>
      <router-link to="/profile">
        <font-awesome-icon icon="user"/> Perfil
      </router-link>
    </nav>

    <hr>

    <nav class="salas">
      <div>
        <h1>SALAS</h1>  <!-- esse font-awesome-icon é o botão de mais ao lado do título salas que vai abrir o adicionar sala -->
        <button @click="irCriarSala"> <font-awesome-icon icon="plus"/> </button>

        <div> <!-- quem for criar as salas, já cria lá na pasta data um dataset de salas padrão pfv, pra deixar um v-for aqui. -->

        </div>
      </div>
    </nav>

    <hr>

    <nav class="suporte">
      <router-link to="/help">
        <font-awesome-icon icon="circle-question"/> Ajuda
      </router-link>
      <router-link to="/about">
        <font-awesome-icon icon="circle-info"/> Sobre
      </router-link>

    </nav>
  </aside>
</template>

<style scoped>
</style>
