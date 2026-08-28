<script setup>
import { computed, ref, watch } from 'vue'
import { postagens } from '@/data/postagens'
import Postagens from '@/components/Postagens/Postagens.vue'
import { salasUsuario } from '@/data/salasUsuario'
import { loginOut } from './account/login/Loginout'
import { userReal } from '@/views/account/login/UserReal'

const nomeUsuario = ref(localStorage.getItem('nomeUsuario') || userReal );

watch(nomeUsuario, (novoNome) => {
  localStorage.setItem('nomeUsuario', novoNome)
});

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

const conteudoRapido = ref('')
const salaSelecionada = ref(null)

function criarPostRapido() {
  if (!conteudoRapido.value.trim()) {
    alert('Escreva algo antes de postar!')
  }

  if (!salaSelecionada.value) {
    alert('Escolha uma sala antes de postar!')
  }

  let maiorId = Math.max(...postagens.value.map((item) => item.id))

  const novoPost = {
    titulo: '',
    conteudo: conteudoRapido.value,
    autor: userReal,
    data: new Date().toLocaleDateString('pt-BR'),
    id: maiorId + 1,
    salaId: Number(salaSelecionada.value),
  }

  postagens.value.unshift(novoPost)
  localStorage.setItem('postagens', JSON.stringify(postagens.value))

  conteudoRapido.value = ''
  salaSelecionada.value = null
}
</script>

<template>
  <div class="container">
    <div class="postar" v-if="loginOut === 'ativo'">
      <div class="imginput">
        <img src="../../public/kuaa.png" alt="icone de perfil do usuario" />
        <input type="text" placeholder="Qual é seu tema de estudo agora?" v-model="conteudoRapido"/>
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
          <button class="botaoPostar" type="submit" @click="criarPostRapido">Postar</button>
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

<<<<<<< Updated upstream
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


/*
///////////////////////////////////////////// BUGS/COISAS PRA ARRUMAR /////////////////////////////////////////////
TIMELINE:
1. quando clicar na foto/nome da sala/usuario ter como entrar no perfil da sala/usuario
2. criar post do + bugado na timeline, além de n ter como escolher salas
3. quando o post é seu n ta mais aparecendo editar/excluir e n ta reconhecendo seu usuario (QUANDO SE CRIA UM USUÁRIO ELE NAO TEM UM ID)
4. posts em alta sem foto
5. curtidas!!! e salvos

SALAS:
1. quando vc cria uma sala vc nao está nela automaticamente
2. tem como editar/excluir salas aleatorias q nem sao suas

PESQUISA:
1. poder separar se vc quer pesquisar espeficamente uma sala, um usuario ou uma postagem
2. ter como pesquisar postagens
3. Ta dando pŕa criar a sala sem logar
4. quando loga em uma conta e depois sai da conta, cria uma sala e sai com o nome do criador do login mesmo nao estando logado


LOGIN:
1. precisar ter conta pra comentar
2. tem como ver posts sem ter conta logada (q esta relacionada a capacidade de entrar em salas sem ter conta)
3. tem como criar sala sem ter conta
4. tem como 'seguir' sem ter conta
5. tem como entrar em salas sem conta
6. tem como ver o proprio perfil sem ter conta

USUARIOS:
1. era bom ter variedade de seguidores e seguindo

CSS:
1. css de pesquisa
2. css explorar salas
3. css read sala
4. responsividade




*/
</style>
=======
>>>>>>> Stashed changes
