<!-- read salas/comunidades -->
<script setup>
import { useRouter } from 'vue-router'
import { salas } from '@/data/salas'
import { ref } from 'vue'
const router = useRouter()
const nome = ref('')
const descricao = ref('')
function cancelar() {
  router.push('/')
}
function criar() {
  salas.value.push({
    nome: nome.value,
    descricao: descricao.value,
  })
  console.log(salas.value)

  nome.value = ''
  descricao.value = ''

  router.push('/')
}
</script>

<template>
  <div class="criarsala">
    <h1>Criar Sala</h1>
    <p>Nome da Sala</p>
    <input v-model="nome" type="text" placeholder="blablabla" />
    <p>Descrição</p>
    <input v-model="descricao" type="text" placeholder="clallka" />

    <button @click="criar">Criar</button> <button @click="cancelar">Cancelar</button>
  </div>
</template>

<style scoped>
.criarsala {
  margin-left: 13rem;
  text-align: center;
}

input {
  background-color: aqua;
  color: black;
}
</style>
