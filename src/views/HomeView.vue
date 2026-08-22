<script setup>
import { computed, ref } from 'vue'
import { postagens } from '@/data/postagens'
import Postagens from '@/components/Postagens/Postagens.vue'
import { salasUsuario } from '@/data/salasUsuario'
import { loginOut } from './account/login/Loginout'

function usuarioEstaNaSala(salaIdDoPost) {
  for (let sala of salasUsuario.value) {
    const idUsuario = sala.idSala || sala.id

    if (Number(idUsuario) === Number(salaIdDoPost)) {
      return true
    }
  }
  return false
}

const postsTimeline = computed(() => {
  return postagens.value.filter((post) => {
    const inscrito = usuarioEstaNaSala(post.salaId)
    const viral = post.curtidas >= 150

    return inscrito || viral
  })
})

const salaSelecionada = ref(null)
</script>

<template>
  <div class="container">
    <div class="postar" v-if="loginOut === 'ativo'">
      <div class="imginput">
        <img src="../../public/kuaa.png" alt="icone de perfil do usuario" />
        <input type="text" placeholder="Qual é seu tema de estudo agora?" />
      </div>

      <div class="botao">
        <div class="botoesSala">
          <span
            v-for="sala in salasUsuario"
            :key="sala.idSala || sala.id"
            class="salaItem"
            :class="{ ativa: salaSelecionada === (sala.idSala || sala.id) }"
            @click="salaSelecionada = sala.idSala || sala.id"
          >
            {{ sala.nome }}
          </span>
        </div>

        <div>
          <button class="botaoPostar" type="submit">Postar</button>
        </div>
      </div>
    </div>

    <div class="postar" v-if="loginOut === 'inativo'">
      <div class="semPosts">
        <p>Você não tem conta para postar!</p>
      </div>
    </div>

    <div class="semPosts" v-if="postsTimeline.length === 0">
      <p>Ainda não há posts. Experimente entrar em uma sala!</p>
    </div>

    <div class="feed" v-else>
      <Postagens :posts="postsTimeline" />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 3vw 5vw auto;
  padding: 0 15px;
  box-sizing: border-box;
  color: #d9d9d9;
}

.postar {
  background-color: #1e1e1e;
  border: 1px solid #2d2d2d;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 0 6px #0000002d;
  width: 800px;
  margin: 2vw auto;
}

.botoeSala {
  display: flex;
  flex: 1;
  gap: 5px;
}

.imginput {
  display: flex;
  gap: 10px;
  width: 100%;
}

.imginput img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}

.imginput input {
  flex: 1;
  border: none;
  outline: none;
  color: #d9d9d9;
  font-size: 1rem;
  padding: 12px 0 8px 0;
}

.botao {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #282828;
  padding-top: 10px;
}

.botoesSala {
  display: flex;
  gap: 8px;
  align-items: center;
  flex: 1;
  max-width: 550px;
  overflow-x: auto;
  white-space: nowrap;
  padding: 4px 0;
  scrollbar-width: thin;
  scrollbar-color: #444444 #1e1e1e;
}

.semPosts p {
  font-size: 1.5rem;
  text-align: center;
}

.salaItem {
  font-size: 0.85rem;
  font-weight: 500;
  color: #b0b0b0;
  background-color: #313131;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
  flex-shrink: 0;
}

.salaItem:hover {
  transition: 0.2s;
  opacity: 0.9;
  color: #ffffff;
}

.salaItem.ativa {
  background-color: #ffffff;
  color: #1e1e1e;
  font-weight: bold;
}

.botaoPostar {
  color: #1e1e1e;
  font-weight: bold;
  background-color: #eeeeee;
  padding: 3px 30px;
  border-radius: 15px;
}

.botaoPostar:hover {
  transition: 0.2s;
  opacity: 0.9;
  transform: scale(0.95);
}

.salas {
  background-color: #1a1a1a;
  border: 1px solid #2d2d2d;
  border-radius: 15px;
  padding: 8px;
  max-width: 300px;
  box-shadow: 0 0 15px #0101012f;
}
</style>
