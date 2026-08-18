<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { seguidores } from './Followers';
import { seguindo } from './Following';
import { users } from './Users';
import { ref } from 'vue';


const route = useRoute();

const usuario = computed(() => {
  return users.find(
    (usuario) => usuario.id === Number(route.params.id),
  )
})

const suarios = JSON.parse(localStorage.getItem('salasEntradas')) || []

const mostrarSala = ref(localStorage.getItem('mostrarSala?') || 'sim')

let mensagemSeguir = ref('Seguir')

let estaseguindo = false
function seguir() {
  if (estaseguindo == false) {
    estaseguindo = true
    mensagemSeguir.value = 'Seguindo'
    seguidores.push({ id: 5, nome: 'vc ne kkkk' })
  } else {
    estaseguindo = false
    mensagemSeguir.value = 'Seguir'

    const indice = seguidores.findIndex((usuario) => usuario.id == 5)
    if (indice > -1) {
      seguidores.splice(indice, 1)
    }
  }
  console.log(estaseguindo)
  console.log(mensagemSeguir)
}

</script>

<template>
  <main class="container">
    <div v-if="usuario" class="cartaoPerfil">
      <img v-if="usuario.banner" :src="usuario.banner" class="banner" />
      <img v-if="usuario.pfp" :src="usuario.pfp" class="foto" />

      <div class="acoesPerfil">

        <button class="seguirUsuario" v-on:click="seguir()">{{ mensagemSeguir }}</button>
        <div>
          <ul>
            <li class="seguidores">{{ seguidores.length }} Seguidores</li>
            <li class="seguindo">{{ seguindo.length }} Seguindo</li>
          </ul>
        </div>

        <div class="salas" v-show="mostrarSala === 'sim'">
          <ul>
            <li v-for="sala in suarios" :key="sala.id" :nome="sala.nome">
              <p>{{ sala.nome }}</p>
            </li>
          </ul>
        </div>
      </div>
      

      <h1>{{ usuario.nome }}</h1>
      <p>{{ usuario.desc }}</p>
    </div>


    <div v-else>
      <p>Usuário não encontrado.</p>
    </div>
  </main>
</template>

<style scoped>

</style>