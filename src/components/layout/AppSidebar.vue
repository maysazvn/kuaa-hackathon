<script setup>

import { useRouter } from 'vue-router';
const router = useRouter()
import { salas } from '@/data/salas';

function irCriarSala() {
  router.push('/room')
}

</script>

<template>
  <aside class="sidebar">
    <nav class="geral">
      <ul>
        <li>
          <router-link to="/">
            <font-awesome-icon icon="house" /> Página Inicial
          </router-link>
        </li>
        <li>
          <router-link to="/explore">
            <font-awesome-icon icon="compass" /> Explorar
          </router-link>
        </li>
        <li>
          <router-link to="/profile">
            <font-awesome-icon icon="user" /> Perfil
          </router-link>
        </li>
      </ul>
    </nav>

    <hr>

    <nav class="salas">
<<<<<<< HEAD
      <div>
        <h1>SALAS</h1>  <!-- esse font-awesome-icon é o botão de mais ao lado do título salas que vai abrir o adicionar sala -->
        <button @click="irCriarSala"> <font-awesome-icon icon="plus"/> </button>

        <div> <!-- quem for criar as salas, já cria lá na pasta data um dataset de salas padrão pfv, pra deixar um v-for aqui. -->

          <div v-for="sala in salas" :key="sala.nome">
            <h2>{{ sala.nome }}</h2>
          </div>

=======
      <div class="criarSala">
        <h1>SALAS</h1>
        <font-awesome-icon icon="plus" class="icone-grupo" />
        <!-- esse font-awesome-icon é o botão de mais ao lado do título salas que vai abrir o adicionar sala -->

        <div>
          <!-- quem for criar as salas, já cria lá na pasta data um dataset de salas padrão pfv, pra deixar um v-for aqui. -->
>>>>>>> DEV
        </div>

      </div>
    </nav>

    <hr>

    <nav class="suporte">
      <h1>SUPORTE</h1>
      <ul>
        <li>
          <router-link to="/help">
            <font-awesome-icon icon="circle-question" /> Ajuda
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <font-awesome-icon icon="circle-info" /> Sobre
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
aside.sidebar {
  background: #262626;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  position: fixed;
  padding-top: 10px;
}

h1 {
  color: #D9D9D9;
  font-weight: bold;
}

.criarSala {
  color: #D9D9D9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}

ul li a {
  color: #D9D9D9
}

ul li:hover {
  transform: scale(0.95);
  transition: 0.2s;
}

.router-link-active {
  font-weight: bold;
}

hr {
  color: #D9D9D9;
  margin: 2px;
}

.icone-grupo  {
  right: 0% !important;
}
</style>
