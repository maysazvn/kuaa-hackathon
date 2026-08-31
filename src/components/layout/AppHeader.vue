<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const busca = ref('');
const router = useRouter();

function irParaOFiltro() {
  router.push({path: '/filter', query: {dado: busca.value}})
}

</script>

<template>
  <header>
    <div>
     <img src="/logo-kuaa.png" alt="Logo Header" class="logo">
    </div>
    <div class="direito">
      <div class="search">
        <font-awesome-icon icon="magnifying-glass" class="lupa"/>

        
        <form action="/filter" method="GET" @submit.prevent="irParaOFiltro">
          <input type="search" v-model="busca" placeholder="Buscar..."> <!-- Busca de usuário, sala e postagem -->
        </form>
        
      </div>
      <div>
        <router-link to="/login"><font-awesome-icon icon="right-to-bracket" class="login" /></router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #1E1E1E;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  border-bottom: 2px solid #313131;
  box-sizing: border-box;
  z-index: 1000;
}

.search{
  display: flex;
  background: #F8D76B;
  border-radius: 50px;
  padding: 2px;
  align-items: center;
}

.lupa{
  margin: 5px;
}

input{
font-size: 1.2rem;
background: transparent;
  border: none;
  outline: none;
}

input::placeholder {
  color: #584c3a;
}

.direito{
  display: flex;
  gap: 10px;
  align-items: center;
}

.login{
  color: #D9D9D9;
  font-size: 1.5rem;
}

</style>
