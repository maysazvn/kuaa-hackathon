<script setup>
import { ref, onMounted } from 'vue'
import CommentsPostagens from './CommentsPostagens.vue'
import CriarPost from './CriarPost.vue'
import { postagens } from '@/data/postagens.js'
import { salasUsuario } from '@/data/salasUsuario.js'
import { shallowRef } from 'vue'
import { salas } from '@/data/salas.js'
import { users } from '@/views/user/Users.js'

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
})

//hallana essa function procura se o usuario está na sala ou nao
function usuarioEstaNaSala(salaIdDoPost) {
  for (let sala of salasUsuario.value) {
    const idUsuario = sala.idSala || sala.id

    if (Number(idUsuario) === Number(salaIdDoPost)) {
      return true
    }
  }
  return false
}

//essa procura la no salas.js o banner da sala
function pegarBanner(salaId) {
  const sala = salas.value.find((sal) => sal.idSala === Number(salaId))
  if (sala) {
    return sala.banner
  } else {
    return ''
  }
}

//essa procura la no users.js o banner da sala
function pegarFotoUsuario(autorID) {
  const usuarioEncontrado = users.find((usu) => usu.id === autorID)
  if (usuarioEncontrado) {
    return usuarioEncontrado.pfp
  } else {
    return '/pfpPlaceholder.png'
  }
}

//e essa o nome do autorkkkkkkkkkkkkkkk
function pegarNomeAutor(autorID) {
  const usuarioEncontrado = users.find((usu) => usu.id === autorID)
  if (usuarioEncontrado) {
    return usuarioEncontrado.nome
  } else {
    return 'Usuário desconhecido'
  }
}

let usuario = ref('cofeeBarney')
const mostrarComent = ref(null)
const dialog = shallowRef(false)

const storage = 'postagens'

onMounted(() => {
  const salvos = localStorage.getItem(storage)

  if (salvos) {
    postagens.value = JSON.parse(salvos)
  }
})

function excluir(idItem) {
  postagens.value = postagens.value.filter((post) => post.id !== idItem)
  localStorage.setItem(storage, JSON.stringify(postagens.value))
}
function editar(post) {
  const index = postagens.value.findIndex((p) => p.id === post.id)

  if (index !== -1) {
    const edicao = prompt(`Edite o seu post...`, post.conteudo)

    if (edicao !== null) {
      postagens.value[index].conteudo = edicao
    }
  }
  localStorage.setItem(storage, JSON.stringify(postagens.value))
}

function mostrarItens(post) {
  post.aberto = !post.aberto
}

function denunciar() {
  alert('Comentário denunciado com sucesso.')
}

function salaDoPost(salaId) {
  if (!salas.value) return 'Geral'
  const salaEncontrada = salas.value.find((s) => Number(s.idSala) === Number(salaId))
  return salaEncontrada ? salaEncontrada.nome : 'Geral'
}
</script>

<template>
  <section>
    <div>
      <div class="postagens" v-for="post in props.posts" :key="post.id">
        <div class="listaPosts">
          <div class="identificacao">
            <span class="salas" v-if="usuarioEstaNaSala(post.salaId)">
              <RouterLink :to="`/salas/${post.salaId}`">
                <img :src="pegarBanner(post.salaId)" :alt="nome" class="iconSala" />
              </RouterLink>
              <RouterLink :to="`/salas/${post.salaId}`">
                Em {{ salaDoPost(post.salaId) }}
              </RouterLink>
            </span>
            <span class="salas" v-else>
              <RouterLink :to="`/salas/${post.salaId}`">
                <img :src="pegarBanner(post.salaId)" :alt="nome" class="iconSala" />
              </RouterLink>
              <RouterLink :to="`/salas/${post.salaId}`">
                Em alta em {{ salaDoPost(post.salaId) }}
              </RouterLink></span
            >
          </div>
          <div class="cima">
            <div class="esq">
              <p class="autor">
                <strong>
                  <RouterLink :to="`/otherProfile/${post.autorID}`">
                    <img :src="pegarFotoUsuario(post.autorID)" class="fotoAutor" />
                  </RouterLink>
                  <RouterLink :to="`/otherProfile/${post.autorID}`">
                    {{ pegarNomeAutor(post.autorID) }}
                  </RouterLink>
                </strong>
              </p>

              <p>
                {{ post.data }}
              </p>
            </div>

            <div class="dir">
              <button class="editarDeletar" v-on:click="mostrarItens(post)">•••</button>

              <div class="vshow" v-show="post.aberto">
                <div v-if="post.autor === usuario" class="btnsEditarDeletar">
                  <button @click="editar(post)" class="editar">Editar</button>
                  <button @click="excluir(post.id)" class="deletar">Excluir</button>
                </div>

                <div v-else>
                  <button @click="denunciar(post)" class="denunciar">Denunciar</button>
                </div>
              </div>
            </div>
          </div>

          <h2 class="titulo">
            {{ post.titulo }}
          </h2>
          <p class="conteudo">
            {{ post.conteudo }}
          </p>

          <div class="interacao">
            <button @click="mostrarComent = post.id" v-show="!mostrarComent" class="mostrarComent">
              <font-awesome-icon icon="comment" />
            </button>

            <div v-if="mostrarComent === post.id">
              <CommentsPostagens :post="post" :usuario="usuario"></CommentsPostagens>
              <button @click="mostrarComent = null" class="mostrarComent">
                <font-awesome-icon icon="comment" />
              </button>
            </div>

            <div class="curtidas">
              <button class="mostrarComent"><font-awesome-icon icon="heart" /></button>
            </div>

            <div class="salvos">
              <button class="mostrarComent"><font-awesome-icon icon="bookmark" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="btn-fixo">
      <v-dialog v-model="dialog" max-width="600" class="modal-redondo" elevation="0">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            class="text-none font-weight-regular"
            text="+"
            variant="tonal"
            v-bind="activatorProps"
          >
            <span class="text-black" size="large">+</span>
          </v-btn>
        </template>

        <CriarPost @adicionar="adicionar" @fechar="dialog = false" />
      </v-dialog>
    </div>
  </section>
</template>

<style scoped>
div.listaPosts {
  background: #262626;
  color: #d9d9d9;
  border-radius: 20px;
  padding: 30px;
  max-width: 60%;
  margin: 0 auto;
  margin-bottom: 35px;
  border: 1px solid #333333;
}

.cima {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.esq {
  display: flex;
  align-items: center;
  gap: 25px;
}

.dir {
  position: relative;
}

p.autor {
  margin: 0;
  display: flex;
  flex-direction: column;
}

p.autor a {
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
}

h2.titulo {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1px;
}

p.conteudo {
  font-size: 1.1rem;
  margin: 15px 0;
  margin-top: 1px;
}

button.mostrarComent {
  background-color: #3e3e3e;
  border-radius: 25px;
  padding: 10px 25px;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
}

button:hover {
  opacity: 0.9;
  transform: scale(0.95);
  transition: 0.2s;
}

a:hover {
  opacity: 0.6;
  transition: 0.4s;
}

div.identificacao {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

span.salas {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #1e1e1e;
  padding: 5px 50px 5px 15px;
  border-radius: 20px;
  border: 1px solid #333333;
  font-size: 0.85rem;
}

span.salas a {
  font-weight: bold;
}

span.salas img {
  width: 35px;
  height: 35px;
  border-radius: 10px;
}

.interacao {
  display: flex;
  gap: 10px;
}

/*//////*/

input {
  border: 1px black solid;
}

textarea {
  border: 1px black solid;
}

div.postar {
  display: flex;
  flex-direction: column;
  max-width: 30%;
  margin: 0 auto;
  margin-bottom: 30px;
}

h3 {
  font-size: 60px;
  text-align: center;
  font-weight: bolder;
}

.btn-fixo {
  position: fixed !important;
  bottom: 30px !important;
  right: 30px !important;
  z-index: 999 !important;
  padding: 0 !important;
}

.text-none {
  background-color: #f8d76b !important;
  font-size: 2.2rem !important;
  font-weight: bold !important;
  width: 55px !important;
  height: 55px !important;
  min-width: 0 !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 30px !important;
  margin: 80px !important;
}

.text-black {
  font-weight: bold;
  color: #1e1e1e;
}

.text-none:hover {
  transition: 0.5s;
  transform: scale(1.1);
  cursor: pointer;
}

.btn-mais {
  background-color: #f8d76b !important;
  color: #1e1e1e !important;
  font-size: 2.2rem !important;
  font-weight: bold !important;
  width: 55px !important;
  height: 55px !important;
  min-width: 0 !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0 !important;
  transition: transform 0.2s ease !important;
}

.btn-mais:hover {
  transform: scale(1.1) !important;
  cursor: pointer;
}

.vshow {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #313131;
  color: #d9d9d9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.179);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  z-index: 10;
  font-size: 0.8rem;
}

button.editarDeletar {
  border: none;
  color: #888888;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 6px;
}

button.editarDeletar:hover {
  background-color: #333333;
  color: #ffffff;
  transition: 0.2s;
}

.btnsEditarDeletar button,
.denunciar {
  color: #d9d9d9;
  padding: 6px 12px;
  text-align: left;
  width: 100%;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
}

.editar:hover {
  color: #f8d76b;
}

.deletar:hover,
.denunciar:hover {
  color: #ff5252;
}

.fotoAutor {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  vertical-align: middle;
  margin-right: 6px;
}

/*
checklist:
-- função adicionar imagem e fotos do usuario e das salas nos posts

//////////////////////////// evita usar vuetify nao sei fazer css disso //////////////////////////////////////

*/
</style>
