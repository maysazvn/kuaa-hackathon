<script setup>
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
  background: #262626;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  position: fixed;
  padding-top: 10px;
}

h1 {
  color: #d9d9d9;
  font-weight: bold;
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
}

ul li:hover {
  transform: scale(0.95);
  transition: 0.2s;
}

.router-link-active {
  font-weight: bold;
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
