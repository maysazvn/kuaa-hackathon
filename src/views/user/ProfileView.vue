<!-- read usuario -->
<script setup>

import { ref } from 'vue';
/* import { novaFoto } from '../user/EditProfileView.vue'; */

import { seguidores } from './Followers';
import { seguindo } from './Following';

let existe = ref(true);

const nomeUsuario = ref(localStorage.getItem('nomeUsuario') || '');
const desc = ref(localStorage.getItem('desc') || '');
const urlFoto = ref(localStorage.getItem('urlFoto') || '/pfpPlaceholder.png');
const urlBanner = ref(localStorage.getItem('urlBanner') || '/bannerPlaceholder.png');

let estaseguindo = false;
 let mensagemSeguir = ref('Seguir')

function seguir (){
  if (estaseguindo == false) {
    estaseguindo = true;
    mensagemSeguir.value = 'Seguindo'
    seguidores.push({id: 5, nome: 'vc ne kkkk'});
  } else {
    estaseguindo = false
    mensagemSeguir.value = 'Seguir'
    
    const indice = seguidores.findIndex(usuario => usuario.id == 5);
    if (indice > -1) {
      seguidores.splice(indice, 1);
    }
  }
  console.log(estaseguindo);
  console.log(mensagemSeguir);

}

const mostrarSala = ref(localStorage.getItem('mostrarSala?') || 'sim');

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
      <img v-if="urlBanner" :src="urlBanner" class="banner">
      <img v-if="urlFoto" :src="urlFoto" class="foto">

      <button class="seguirUsuario" v-on:click="seguir()">{{ mensagemSeguir }}</button>
        <button class="editarDeletar" v-on:click="mostrarItens()">•••</button>
        <div class="editEdelete" v-show="mostrar == true" v-on:click="mostrarItens()">
          <router-link to="/edit">
            <button v-on:click="editar">Editar</button>
          </router-link>
          <button v-on:click="excluir">Deletar</button>
        </div>

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
          <p>
            (salas do usuario)
          </p>
        </div>


      <h1>{{ nomeUsuario }}</h1>
      <p>{{ desc }}</p>

    </div>
  </main>
</template>

<style scoped>
  button.seguirUsuario {
    background-color: blue;
    color: white;
    height: 1vw;
    justify-content: right;

  }

  div.editEdelete {
    background-color: aqua;
  }

  .cartaoPerfil {
    width: 57vw;
    height: 35vw;
    background-color: gray;
    position: relative;
    border-radius: 2vw;
    display: flex;
    justify-content: center;
  }

  .foto {
    width: 8vw;
    height: 8vw;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    z-index: 10;
    top: 8vw;
    left: 5vw;
  }

  .banner {
    width: 57vw;
    height: 11vw;
    object-fit: cover;
    border-radius: 2vw 2vw 0 0;
  }

</style>
