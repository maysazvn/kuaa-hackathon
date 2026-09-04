<!-- read usuario -->
<script setup>
import { ref } from 'vue'
/* import { novaFoto } from '../user/EditProfileView.vue'; */
import { seguidores } from './Followers'
import { seguindo } from './Following'
import { userReal } from '../account/login/UserReal'
import { urlFoto } from './urlFoto';
import { salas } from '@/data/salas';
import { loginOut } from '../account/login/Loginout';

const suarios = JSON.parse(localStorage.getItem('salasEntradas')) || []
const nomeUsuario = ref(localStorage.getItem('nomeUsuario') || userReal)
const desc = ref(localStorage.getItem('desc') || '')
const urlBanner = ref(localStorage.getItem('urlBanner') || '/bannerPlaceholder.png')
const mostrarSala = ref(localStorage.getItem('mostrarSala?') || 'sim')

function buscarSalas() {
  return salas.value.filter(sala => {
    for (const item of suarios) {
      if (item.idSala === sala.idSala) {
        return true;
      }
    }
    return false;
  });
}

let existe = ref(true);
// const urlFoto = ref(localStorage.getItem('urlFoto') || '');





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
  <span v-if="loginOut === 'ativo'"> 
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
      <ul class="listaSalas">
        <li v-for="sala in buscarSalas()" :key="sala.idSala" :nome="sala.nome" class="cardSala">
          <RouterLink :to="`/salas/${sala.idSala}`">
              <span class="nomesala">{{ sala.nome }}</span>
            </RouterLink>
        </li>
      </ul>
    </div>
  </div>
  </span>
  <span v-else>
    <p>
      Faça login para editar seu perfil!
    </p>
  </span>
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

.listaSalas {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 6px;
  scrollbar-width: thin;
  scrollbar-color: #444444 #1e1e1e;
}

.cardSala {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #313131;
  padding: 1px 10px;
  border-radius: 15px;
  cursor: pointer;
  color: #d9d9d9;
}

.cardSala:hover {
  opacity: 0.9;
  transform: scale(0.95);
  transition: .2s;
}

.nomesala {
  color: #e0e0e0;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
