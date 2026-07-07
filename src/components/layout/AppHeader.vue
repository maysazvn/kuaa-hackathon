<script setup>
</script>

<template>
  <header>
    <div>
     <img src="../../../public/logo-kuaa.png" alt="Logo Header" class="logo">
    </div>
    <div class="direito">
      <div class="search">
        <font-awesome-icon icon="magnifying-glass" class="lupa"/>

        <input type="search" v-model="busca" placeholder="Buscar..."> <!-- Busca de usuário, sala e postagem -->
      </div>
      <div>
        <font-awesome-icon icon="bars" class="menu" />
      </div>
    </div>
  </header>
</template>

<style scoped>
header{
  background: #1E1E1E;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

.search{
  display: flex;
  background: #F9EAA8;
  border-radius: 10px;
  padding: 2px;
  align-items: center;
}

.lupa{
  margin: 5px;
}

input{
font-size: 1.2rem;
}

.direito{
  display: flex;
  gap: 10px;
  align-items: center;
}

.menu{
  color: #D9D9D9;
  font-size: 1.5rem;
}

</style>
