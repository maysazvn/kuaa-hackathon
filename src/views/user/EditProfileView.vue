<script setup>
import { ref, watch } from "vue";

const nomeUsuario = ref(localStorage.getItem('nomeUsuario') || '');

const desc = ref(localStorage.getItem('desc') || '');

watch(nomeUsuario, (novoNome) => {
  localStorage.setItem('nomeUsuario', novoNome);
})

watch(desc, (novaDesc) => {
  localStorage.setItem('desc', novaDesc)
})

const urlFoto = ref(localStorage.getItem('urlFoto') || '');
const urlBanner = ref(localStorage.getItem('urlBanner') || '');


let novaFoto = ref(null);
let novoBanner = ref(null);

function mudarFoto(event) {
  novaFoto.value = event.target.files[0];

  if (novaFoto.value){
    const reader = new FileReader();

    reader.onload = () => {
      urlFoto.value = reader.result;
      localStorage.setItem('urlFoto', reader.result);
    };

    reader.readAsDataURL(novaFoto.value);
  }
}

function mudarBanner(event) {
  novoBanner.value = event.target.files[0];

  if (novoBanner.value){
    const reader = new FileReader();

    reader.onload = () => {
      urlFoto.value = reader.result;
      localStorage.setItem('urlBanner', reader.result);
    };

    reader.readAsDataURL(novoBanner.value);
  }
}

</script>

<template>
    <main class="container">
    <div class="cartaoPerfil">
        
        <input type="file" id="banner">

        <div class="adicionarFoto">

            <input type="file" id="fotoDePerfil" @change="mudarFoto" accept="image/*">
            <img id="preview" :src="urlFoto" alt="Preview" v-if="urlFoto">
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