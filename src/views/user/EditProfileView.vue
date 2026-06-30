<script setup>
import { ref } from "vue";

const nomeUsuario = ref("");



</script>

<template>
    <main class="container">
    <div class="cartaoPerfil">
        
        <input type="file" id="banner">

        <div class="adicionarFoto">

            <input type="file" id="fotoDePerfil" accept="/image*">
            <img id="preview" src="" alt="">

        </div>


      <input v-model="nomeUsuario">
      <input type="text" id="desc">


      <div class="salaMostra">
        <h3>
            Mostrar Salas?
        </h3>
        <input type="radio" name="mostrarSala?" value="sim" id="yes">
        <label for="yes">Sim</label>

        <input type="radio" name="mostrarSala?" value="nao" id="no" >
        <label for="no">Não</label>
      </div>
      

    </div>
  </main>
</template>

<style scoped>

</style>