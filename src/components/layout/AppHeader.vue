<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const busca = ref('')
const router = useRouter()

function irParaOFiltro() {
  router.push({ path: '/filter', query: { dado: busca.value } })
}
</script>

<template>
  <header>
    <div>
      <router-link to="/">
      <img src="/logo-kuaa.png" alt="Logo Header" class="logo" />
      </router-link>
    </div>
    <div>
      <div class="search">
        <font-awesome-icon icon="magnifying-glass" class="lupa" />

        <form action="/filter" method="GET" @submit.prevent="irParaOFiltro">
          <input type="search" v-model="busca" placeholder="Buscar..." />
          <!-- Busca de usuário, sala e postagem -->
        </form>
      </div>
      <div>
        <router-link to="/login"
          ><font-awesome-icon icon="right-to-bracket" class="login"
        /></router-link>
      </div>

      <font-awesome-icon icon="bars" />
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #1e1e1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  border-bottom: 2px solid #313131;
  box-sizing: border-box;
  z-index: 1000;
  gap: 10px;
}

.search {
  display: flex;
  align-items: center;
  background: #f8d76b;
  border-radius: 50px;
  padding: 4px 10px;
  height: 36px;
  box-sizing: border-box;
}

.lupa {
  margin-right: 6px;
  color: #1e1e1e;
  flex-shrink: 0;
}

.logo {
  width: clamp(45px, 6vw, 120px);
  display: block;
}

input {
  font-size: 1rem;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}

input::placeholder {
  color: #584c3a;
}

.direito {
  display: flex;
  gap: 12px;
  align-items: center;
  flex: 1;
  min-width: 0;
  justify-content: flex-end;
}

.login {
  color: #d9d9d9;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

input, .search, .direito{
  color: #1e1e1e;
}

@media (max-width: 768px) {
  header {
    padding: 5px 12px;
    gap: 8px;
  }

  .logo {
    width: clamp(90px, 12vw, 110px);
  }

  .search {
    flex: 1;
    max-width: 140px;
    height: 32px;
  }

  input {
    font-size: 0.9rem;
  }
}

@media (max-width: 400px) {
  .logo {
    width: clamp(36px, 14vw, 45px);
  }

  .search {
    max-width: 100px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .search {
    max-width: 220px;
  }
}
</style>
