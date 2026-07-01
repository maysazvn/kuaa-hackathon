<script setup>
import { ref, watch } from "vue";

const nomeUsuario = ref(localStorage.getItem('nomeUsuario') || '');

const desc = ref(localStorage.getItem('desc' || ''));


watch(nomeUsuario, (novoNome) => {
  localStorage.setItem('nomeUsuario', novoNome);
})

watch(desc, (novaDesc) => {
  localStorage.setItem('desc', novaDesc)
})

export let novaFoto = ref(null);
export let urlFoto = ref(null);

function mudarFoto () {
  novaFoto.value = event.target.files[0];

  if (novaFoto.value){
    urlFoto.value = URL.createObjectURL(novaFoto);
  }
}

</script>

<template>
    <main class="container">
    <div class="cartaoPerfil">
        
        <input type="file" id="banner">

        <div class="adicionarFoto">

            <input type="file" id="fotoDePerfil" @change="mudarFoto()" accept="/image*">
            <img id="preview" src="" alt="">

        </div>


      <input v-model="nomeUsuario">
      <input v-model="desc">


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