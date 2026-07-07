<!-- read salas/comunidades -->
<script setup>
import { useRouter } from 'vue-router'
import { salas } from '@/data/salas'
import { ref } from 'vue'
const router = useRouter()
const nome = ref('')
const descricao = ref('')
const banner = ref('')
function cancelar() {
  router.push('/')
}
function criar() {
  salas.value.push({
    nome: nome.value,
    descricao: descricao.value,
    banner: banner.value
  })
  console.log(salas.value)

  nome.value = ''
  descricao.value = ''
  banner.value = ''

  router.push('/')
}

</script>

<template>
  <img class="imagem" :src="salas.banner" alt="Imagem do banner">
  <h1 class="nome">Criar Sala</h1>
  <section class="criarsala">
    <div class="naosei">
      <p>Nome da Sala</p>
      <input v-model="nome" type="text" placeholder="blablabla" />
      <p>Descrição</p>
      <input v-model="descricao" type="text" placeholder="clallka" />
    </div>
    <input v-model="banner" placeholder="URL DA IMAGEM"> 

  </section>
  <div class="botoes">
    <button @click="criar">Criar</button> <button @click="cancelar">Cancelar</button>
  </div>
</template>

<style scoped>

.nome {
  text-align: center;
  margin-left: 13rem;
}
.imagem {
  margin-left: 20vw;
}

.criarsala {
  text-align: center;
  margin-left: 13rem;
}

.criarsala p {
  margin-right: 2vw;
}
.botoes {
  text-align: center;
}

input {
  background-color: aqua;
  color: black;
}
</style>
