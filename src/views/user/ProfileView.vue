<!-- read usuario -->
<script setup>

import { ref } from 'vue';
/* import { novaFoto } from '../user/EditProfileView.vue'; */
import { urlFoto } from '../user/EditProfileView.vue';

let existe = ref(true);

const nomeUsuario = ref(localStorage.getItem('nomeUsuario') || '');
const desc = ref(localStorage.getItem('desc' || ''));

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
    localStorage.clear();
    existe.value = false;
  }

</script>

<template>
  <main class="container" v-show="existe == true" >
    <div class="cartaoPerfil">
      <img src="" alt="" id="banner">
      <img v-if="urlFoto" :src="urlFoto" alt="" id="fotoDePerfil">

      <button class="seguirUsuario" v-on:click="seguir()">{{ mensagemSeguir }}</button>
        <button class="editarDeletar" v-on:click="mostrarItens()">•••</button>
        <div class="editEdelete" v-show="mostrar == true" v-on:click="mostrarItens()">
          <router-link to="/edit">
            <button v-on:click="editar">Editar</button>
          </router-link>
          <button v-on:click="excluir">Deletar</button>
        </div>


      <h1>{{ nomeUsuario }}</h1>
      <p>{{ desc }}</p>

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
