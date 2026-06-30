<script setup>
import { ref } from 'vue';
let cadastro = ref(true);
let login = ref(false);
function selecionar(){
  
}
</script>

<template>
  <div class="container">
    <div class="bemVindo">
      <img src="../../../public/kuaa.png" alt="Kuaa Logo">
      <p>
        <span>Bem vindo ao Kuaa!</span> 
O Kuaa veio para ajudar você estudante a ter um desempenho melhor em seus estudos, provas e até mesmo fazer amigos novos!
Faça seu cadastro hoje mesmo!
      </p>
    </div>
    <div class="escolha">
      <button @click.prevent="">Cadastro</button>
      <button>Login</button>
    </div>

    <div class="cadastro" v-show="cadastro == true">

    </div>
    <div class="login" v-show="login == true">

    </div>
  </div>
</template>

<style scoped>
</style>
