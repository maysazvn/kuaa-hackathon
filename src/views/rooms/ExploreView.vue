<script setup>
import { salas } from '@/data/salas'
</script>

<template>
  <div v-for="sala in salas" :key="sala.nome" :nome="sala.nome" :descricao="sala.descricao" :banner="sala.banner" class="salas">
    <h2>{{ sala.nome }}</h2>
    <img :src="sala.banner" :alt="sala.nome">
  </div>
  Explorar
</template>

<style scoped>
.salas {
  color: black;
  text-align: center;
}
</style>
