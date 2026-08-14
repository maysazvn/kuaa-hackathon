<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { seguidores } from './Followers';
import { seguindo } from './Following';
import { users } from './Users';
const suarios = JSON.parse(localStorage.getItem("salasEntradas")) || [];

const route = useRoute();

const usuario = computed(() => users.value.find((u) => u.id == route.params.id));

</script>

<template>
    <main class="container">
    <div class="cartaoPerfil">
      <img v-if="usuario.banner" :src="usuario.banner" class="banner">
      <img v-if="usuario.pfp" :src="usuario.pfp" class="foto">

      <button class="seguirUsuario" v-on:click="seguir()">{{ mensagemSeguir }}</button>

        <div>
          <ul>
            <li class="seguidores">
              {{ seguidores.length }} Seguidores
            </li>

            <li class="seguindo">
              {{ seguindo.length }} Seguindo
            </li>
          </ul>
        </div>

        <div class="salas" v-show="usuario.mostrarSala === 'sim'">
          <ul>
            <li v-for="sala in suarios" :key="sala.id" :nome="sala.nome">
              <p>
                {{ sala.nome }}
              </p>
            </li>
          </ul> 
        </div>


      <h1>{{ nomeUsuario }}</h1>
      <p>{{ desc }}</p>

    </div>
  </main>
</template>

<style scoped>

</style>