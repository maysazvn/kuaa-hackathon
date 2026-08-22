<script setup>
</script>

<template>
  <header>
    <div>
     <img src="" alt="Logo Header" class="logo">
    </div>
    <div>
      <div class="search">
        <font-awesome-icon icon="magnifying-glass"/>

        <input type="search" v-model="busca" placeholder="Buscar..."> <!-- Busca de usuário, sala e postagem -->
      </div>

      <font-awesome-icon icon="bars" />
    </div>
  </header>
</template>

<style scoped>
header{
  background: #1E1E1E;
}
</style>
