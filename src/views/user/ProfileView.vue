<!-- read usuario -->
<script setup>

import { ref } from 'vue';

let seguindo = false;
 let mensagemSeguir = ref('Seguir')

function seguir (){
  if (seguindo == false) {
    seguindo = true;
    mensagemSeguir.value = 'Seguindo'
  } else {
    seguindo = false
    mensagemSeguir.value = 'Seguir'
  }
  console.log(seguindo);
  console.log(mensagemSeguir)
}

let mostrar = ref(false);

  function mostrarItens () {
    mostrar.value = !mostrar.value;
    console.log(mostrar);
  }

  function editar () {
    console.log('editando...');
  }

  function excluir () {
    console.log('deletando...');
  }

</script>

<template>
  <main class="container">
    <div class="cartaoPerfil">
      <img src="" alt="" id="banner">
      <img src="" alt="" id="fotoDePerfil">

      <button class="seguirUsuario" v-on:click="seguir()">{{ mensagemSeguir }}</button>
        <button class="editarDeletar" v-on:click="mostrarItens()">•••</button>
        <div class="editEdelete" v-show="mostrar == true" v-on:click="mostrarItens()">
          <button v-on:click="editar">Editar</button>
          <button v-on:click="excluir">Deletar</button>
        </div>


      <h1 id="nomeUsuario"></h1>
      <p id="desc"></p>

    </div>
  </main>
</template>

<style scoped>
  button.seguirUsuario {
    background-color: blue;
    color: white
  }

  div.editEdelete {
    background-color: aqua;
  }

</style>
