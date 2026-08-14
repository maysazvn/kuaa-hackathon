<script setup>
import { ref } from 'vue';
import { seguidores } from './Followers';
import { seguindo } from './Following';
import { users } from './Users';

let existe = ref(true);
</script>

<template>
    <main class="container" v-show="existe == true" >
    <div class="cartaoPerfil">
      <img v-if="urlBanner" :src="urlBanner" class="banner">
      <img v-if="urlFoto" :src="urlFoto" class="foto">

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

        <div class="salas" v-show="mostrarSala === 'sim'">
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