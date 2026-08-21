<!-- read usuario -->
<script setup>
import { ref } from 'vue'
/* import { novaFoto } from '../user/EditProfileView.vue'; */
import { seguidores } from './Followers'
import { seguindo } from './Following'
import { userReal } from '../account/login/UserReal'
const suarios = JSON.parse(localStorage.getItem('salasEntradas')) || []



const nomeUsuario = ref(localStorage.getItem('nomeUsuario') || userReal)
const desc = ref(localStorage.getItem('desc') || '')

const urlBanner = ref(localStorage.getItem('urlBanner') || '/bannerPlaceholder.png')

import { urlFoto } from './urlFoto';

let existe = ref(true);
// const urlFoto = ref(localStorage.getItem('urlFoto') || '');




const mostrarSala = ref(localStorage.getItem('mostrarSala?') || 'sim')

let mostrar = ref(false)

function mostrarItens() {
  mostrar.value = !mostrar.value
  console.log(mostrar)
}

function editar() {
  console.log('editando...')
}

function excluir() {
  localStorage.clear()
  existe.value = false
}
</script>

<template>
  <div class="container" v-show="existe == true">
    <div class="cartaoPerfil">
      <img v-if="urlBanner" :src="urlBanner" class="banner" />
      <img v-if="urlFoto" :src="urlFoto" class="foto" />

      <div class="acoesPerfil">

        <div class="menu">
          <button class="editarDeletar" v-on:click="mostrarItens()">•••</button>

          <div class="editEdelete" v-show="mostrar == true" v-on:click="mostrarItens()">
            <router-link to="/edit">
              <button v-on:click="editar" class="btn-menu">Editar</button>
            </router-link>
            <button v-on:click="excluir" class="btn-menu">Deletar</button>
          </div>
        </div>
      </div>

      <div class="info">
        <h1>{{ nomeUsuario }}</h1>
        <p>{{ desc }} </p>
      </div>

      <div>
        <ul>
          <li class="seguidores">
            <span>{{ seguidores.length }}</span> Seguidores
          </li>
          <li class="seguindo">
            <span>{{ seguindo.length }}</span> Seguindo
          </li>
        </ul>
      </div>
    </div>

    <div class="salas" v-show="mostrarSala === 'sim'">
      <ul>
        <li v-for="sala in suarios" :key="sala.id" :nome="sala.nome">
          <p>{{ sala.nome }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cartaoPerfil {
  position: relative;
  width: 100%;
  margin-bottom: 60px;
}

.acoesPerfil {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  margin-top: 15px;
}

.menu {
  position: relative;
}

.banner {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
}

.foto {
  width: 8vw;
  height: 8vw;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  top: 100px;
  left: 25px;
  border: 5px solid#1e1e1e;
}

.editarDeletar {
  color: #d9d9d9;
}

div.editEdelete {
  position: absolute;
  right: 0;
  top: 35px;
  background-color: #313131;
  color: #d9d9d9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.179);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  z-index: 10;
}

.editEDelete a button {
  padding: 5px 10px;
  text-align: left;
  cursor: pointer;
}

:deep(.btn-menu:hover) {
color: #f8d668;
  transform: scale(0.97);
    transition: 0.3s;
}

ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 15px 0;
}

.info h1,
.info p{
  color: #d9d9d9;
  margin: 15px 30px;
}

.info h1{
  font-weight: bold;
  font-size: 1.8rem;
}

.info p{
  max-width: 500px;
  word-break: break-word;
}

.seguidores,
.seguindo {
  font-size: 0.95rem;
  color: #d9d9d9;
  margin: 15px 30px;
}

.seguidores span,
.seguindo span {
  font-weight: bold;
}
</style>
