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

const urlFoto = ref(localStorage.getItem('urlFoto') || '/pfpPlaceholder.png');
const urlBanner = ref(localStorage.getItem('urlBanner') || '/bannerPlaceholder.png');


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
      urlBanner.value = reader.result;
      localStorage.setItem('urlBanner', reader.result);
    };

    reader.readAsDataURL(novoBanner.value);
  }
}

function confirmar () {
  console.log('confirmando alterações...');
}

</script>

<template>
    <main class="container">
    <div class="cartaoPerfil">
        
        <div class="adicionarFotoBanner">
          <label for="fotoDeBanner">
            <img class="previewBanner" :src="urlBanner" alt="Preview" v-if="urlBanner">
          </label>
            
          <input type="file" id="fotoDeBanner" class="fotoBanner" @change="mudarBanner" accept="image/*"> 
        </div>

        <div class="adicionarFotoPerfil">
          <label for="fotoDePerfil">
            <img class="previewFoto" :src="urlFoto" alt="Preview" v-if="urlFoto">
          </label>
            <input type="file" id="fotoDePerfil" class="fotoPerfil" @change="mudarFoto" accept="image/*">
            
        </div>

        <div class="editarNome">
          <h1>
            Nome usuário
          </h1>
          <input v-model="nomeUsuario" class="nomeUsuario">
        </div>
        <div class="editarDesc">
          <h1>
            Descrição
          </h1>
          <input v-model="desc" class="descricao">
        </div>

      <div class="salaMostra">
        <h3>
            Mostrar Salas?
        </h3>
        <input type="radio" name="mostrarSala?" value="sim" id="yes">
        <label for="yes">Sim</label>

        <input type="radio" name="mostrarSala?" value="nao" id="no" >
        <label for="no">Não</label>
      </div>

      <router-link to="/profile">
        <button v-on:click="confirmar">Confirmar</button>
      </router-link>
      

    </div>
  </main>
</template>

<style scoped>

.previewBanner {
    width: 57vw;
    height: 11vw;
    object-fit: cover;
    border-radius: 2vw 2vw 0 0;
  }

.previewFoto {
    width: 8vw;
    height: 8vw;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    z-index: 10;
    top: 8vw;
    left: 5vw;
  }

  .cartaoPerfil {
    width: 57vw;
    height: 35vw;
    background-color: gray;
    position: relative;
    border-radius: 2vw;
    justify-content: center;
  }

  .nomeUsuario {
    border: 1px solid chartreuse;
    border-radius: 0.25vw;
  }

  .descricao {
    border: 1px solid chartreuse;
    border-radius: 0.25vw;
    
  }

  .fotoBanner {
    display: none;
    opacity: 0%;
  }
  
  .fotoPerfil {
    display: none;
    opacity: 0%;
  }

  .editarNome {
    margin: 5vw 0 0 0;
  }

</style>