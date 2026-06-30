<!-- read salas/comunidades -->
<script setup>

import { useRouter } from 'vue-router';
import { salas } from '@/data/salas';
import { ref } from 'vue';
const router = useRouter();
const nome = ref('');
const descricao = ref('');
function cancelar() {
  router.push('/')
}
function criar() {
  salas.push.value ({
    nome: nome.value,
    descricao: descricao.value
  })
  console.log('shkjdafaa')
}

</script>

<template>

  <h1>Criar Sala</h1>
  <p>
    Nome da Sala
  </p>
  <input v-model="nome" type="text" placeholder="blablabla">
  <p>
    Descrição
  </p>
  <input v-model="descricao" type="text" placeholder="clallka">

  <button @click="criar">Criar</button> <button @click="cancelar" >Cancelar</button>
</template>

<style scoped>
input {
  background-color: aqua;
  color: black;
}
</style>
