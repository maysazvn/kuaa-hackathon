<script setup>
import { ref, onMounted } from 'vue'
import CommentsPostagens from './CommentsPostagens.vue'
import CriarPost from './CriarPost.vue'
import { postagens } from '@/data/postagens.js'

let usuario = ref('cofeeBarney')
const mostrarComent = ref(null)
import { shallowRef } from 'vue'
const dialog = shallowRef(false)

const storage = `postagens_${postagens.id}`

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
</script>

<template>
  <section>
    <div>
      <h3>Postagens</h3>

      <div class="postagens" v-for="post in postagens" :key="post.id" :usuario="usuario">
        <div class="listaPosts">
          <div class="cima">
            <p class="autor">
              <strong>{{ post.autor }} </strong>
            </p>

            <p>
              {{ post.data }}
            </p>
          </div>

          <h2 class="titulo">
            {{ post.titulo }}
          </h2>
          <p class="conteudo">
            {{ post.conteudo }}
          </p>

          <div v-if="post.autor === usuario">
            <button @click.prevent="excluir(post.id)">Excluir</button>
            <button @click="editar(post)">Editar</button>
          </div>
          <button @click="mostrarComent = post.id" v-show="!mostrarComent"><font-awesome-icon icon="comment" />Abrir comentários</button>
          <div v-if="mostrarComent === post.id">
            <CommentsPostagens :post="post" :usuario="usuario"></CommentsPostagens>
            <button @click="mostrarComent = null"><font-awesome-icon icon="comment" />Fechar Comentários</button>
          </div>
        </div>
      </div>
    </div>

    <div class="pa-4 text-center">
      <v-dialog v-model="dialog" max-width="600">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            class="text-none font-weight-regular"
            text="+"
            variant="tonal"
            v-bind="activatorProps"
          >
            <span class="text-black" size="large">+</span></v-btn
          >
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
  max-width: 40%;
  margin: 0 auto;
  margin-bottom: 35px;
}

.cima {
  display: flex;
  align-items: center;
}

p.autor {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
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

button {
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
    transition: .2s;
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

.text-none {
  background-color: #f8d76b;
}
.text-none:hover {
  transition: 0.5s;
  transform: scale(1.1);
  cursor: pointer;
}

/*
checklist:
-- menu dropdown editar/excluir caso seja o usuario dono da postagem
-- função adicionar imagem e fotos do usuario e das salas nos posts
-- colocar sala nos posts, e escolher a sala em que você vai postar tbm
-- (andre vai ajudar) apenas poder postar/comentar quando esta logado */
</style>
