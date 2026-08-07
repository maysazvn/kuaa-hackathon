<script setup>
import { RouterLink } from 'vue-router';

import { salas } from '@/data/salas'
</script>

<template>
  <aside class="sidebar">
    <nav class="geral">

      <ul>
        <li>
          <router-link to="/"> <font-awesome-icon icon="house" /> Página Inicial </router-link>
        </li>
        <li>
          <router-link to="/explore"> <font-awesome-icon icon="compass" /> Explorar </router-link>
        </li>
        <li>
          <router-link to="/profile"> <font-awesome-icon icon="user" /> Perfil </router-link>
        </li>
          <router-link to="/postagens"> POstagens </router-link> <!-- isso é um teste, apagar depois!-->
      </ul>

    </nav>

    <hr />

    <nav class="salas">

      <div class="criarSala">
        <div class="criar">
        <h1>SALAS</h1>
        <router-link to="/room"> <font-awesome-icon icon="plus" class="mais" /> </router-link>
        <!-- esse font-awesome-icon é o botão de mais ao lado do título salas que vai abrir o adicionar sala -->
         </div>

        <div class="salas">
          <div v-for="sala in salas" :key="sala.nome">
            <h2>{{ sala.nome }}</h2>
          </div>
          <!-- quem for criar as salas, já cria lá na pasta data um dataset de salas padrão pfv, pra deixar um v-for aqui. -->
        </div>
      </div>
    </nav>

    <hr />

    <nav class="suporte">
      <h1>SUPORTE</h1>
      <ul>
        <li>
          <router-link to="/help"> <font-awesome-icon icon="circle-question" /> Ajuda </router-link>
        </li>
        <li>
          <router-link to="/about"> <font-awesome-icon icon="circle-info" /> Sobre </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
aside.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 240px;
  height: calc(100vh - 60px);
  z-index: 999;
  background: #313131;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  padding: 10px 5px;
}

h1 {
  color: #d9d9d9;
  font-weight: bold;
  margin: 5px 0;
  font-size: 1.5rem;
}

nav.salas{
  display: flex;
  flex-direction: column;
}

.criar {
  color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}

div.salas{
    color: #d9d9d9;
}

ul li a {
  color: #d9d9d9;
  font-weight: 600;
  font-size: 1.1rem;
  transition: 0.25s ease;
}

ul li:hover {
  transform: scale(0.95);
  transition: 0.2s;
}

ul li a.router-link-active {
border-left: 3px solid #F8D76B;
padding: 3px 15px 3px 6px;
border-radius: 5px;
box-shadow: inset 4px 0 8px -2px #a98e3641;
}

.mais{
  margin: 8px;
}

.router-link-active .mais{
  transform: scale(1.4);
  transition: .2s;
}

hr {
  color: #d9d9d9;
  margin: 2px;
}

.icone-grupo {
  right: 0% !important;
}
</style>
