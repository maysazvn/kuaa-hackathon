<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { users } from './Users';
import { ref } from 'vue';
import { watchEffect } from 'vue';


const route = useRoute();

const usuario = computed(() => {
  return users.find(
    (usuario) => usuario.id === Number(route.params.id),
  )
})

// const suarios = JSON.parse(localStorage.getItem('salasEntradas')) || [];

const mostrarSala = ref(localStorage.getItem('mostrarSala?') || 'sim')
let estaseguindo = ref(false);

watchEffect(() => {
  if (usuario.value) {
    const salvo = localStorage.getItem(`seguindo_${usuario.value.id}`);
    estaseguindo.value = salvo === 'true';
  }
});

const mensagemSeguir = computed(() => (estaseguindo.value ? 'Seguindo' : 'Seguir'));

function seguir() {
  if (!usuario.value) return;

  const segui = users.find(usu => usu.id === usuario.value.id)

  if (!estaseguindo.value) {
    
    estaseguindo.value = true;
    localStorage.setItem(`seguindo_${usuario.value.id}`, 'true');
    segui.seguidores += 1
  } else {
    estaseguindo.value = false;
    localStorage.setItem(`seguindo_${usuario.value.id}`, 'false');

        segui.seguidores -= 1

  }
}

</script>

<template>
  <div class="container">
    <div v-if="usuario" class="cartaoPerfil">
      <img v-if="usuario.banner" :src="usuario.banner" class="banner" />
      <img v-if="usuario.pfp" :src="usuario.pfp" class="foto" />

      <div class="acoesPerfil">
        <button class="seguirUsuario" v-on:click="seguir()">{{ mensagemSeguir }}</button>
      </div>

      <div class="info">
        <h1>{{ usuario.nome }}</h1>
        <p>{{ usuario.desc }}</p>
      </div>

      <div>
        <ul>
          <li class="seguidores">
            <span>{{ usuario.seguidores }}</span> Seguidores
          </li>
          <li class="seguindo">
            <span>{{ usuario.seguindo }}</span> Seguindo
          </li>
        </ul>
      </div>

        <div class="salas" v-show="mostrarSala === 'sim'">
          <ul>
            <li v-show="usuario.sala1 !== null">
              <p> {{ usuario.sala1 }} </p>
            </li>
            <li v-show="usuario.sala2 !== null">
              <p> {{ usuario.sala2 }} </p>
            </li>
            <li v-show="usuario.sala3 !== null">
              <p> {{ usuario.sala3 }} </p>
            </li>
          </ul>
        </div> 
    </div>


    <div v-else>
      <p>Usuário não encontrado.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cartaoPerfil {
  position: relative;
  width: 100%;
  margin-bottom: 60px;
}

.acoesPerfil {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  margin-top: 15px;
}

.menu {
  position: relative;
}

.banner {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
}

.foto {
  width: 8vw;
  height: 8vw;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  top: 100px;
  left: 25px;
  border: 5px solid#1e1e1e;
}

button.seguirUsuario {
  background-color: #f8d768;
  color: #1e1e1e;
  padding: 3px 35px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
}

button.seguirUsuario:hover {
  background-color: #f8d668e7;
  transform: scale(0.97);
  transition: 0.3s;
}

.editarDeletar {
  color: #d9d9d9;
}

div.editEdelete {
  position: absolute;
  right: 0;
  top: 35px;
  background-color: #313131;
  color: #d9d9d9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.179);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  z-index: 10;
}

.editEDelete a button {
  padding: 5px 10px;
  text-align: left;
  cursor: pointer;
}

:deep(.btn-menu:hover) {
color: #f8d668;
  transform: scale(0.97);
    transition: 0.3s;
}

ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 15px 0;
}

.info h1,
.info p{
  color: #d9d9d9;
  margin: 15px 30px;
}

.info h1{
  font-weight: bold;
  font-size: 1.8rem;
}

.info p{
  max-width: 500px;
  word-break: break-word;
}

.seguidores,
.seguindo {
  font-size: 0.95rem;
  color: #d9d9d9;
  margin: 15px 30px;
}

.seguidores span,
.seguindo span {
  font-weight: bold;
}
</style>