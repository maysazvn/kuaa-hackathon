<script setup>
import { ref, onMounted } from 'vue'
import CommentsPostagens from './CommentsPostagens.vue'
import CriarPost from './CriarPost.vue'
import { postagens } from '@/data/postagens.js'

let usuario = ref('cofeeBarney')
const mostrarComent = ref(null)
import { shallowRef } from 'vue'
import { salas } from '@/data/salas.js'
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
      <h3>Postagens</h3>

      <div class="postagens" v-for="post in postagens" :key="post.id" :usuario="usuario">
        <div class="listaPosts">
          <div class="cima">
            <div class="esq">
              <p class="autor">
                <strong>{{ post.autor }} </strong>
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
          <p class="sala"> 
            {{ salaDoPost(post.salaId) }}
          </p>

          <button @click="mostrarComent = post.id" v-show="!mostrarComent" class="mostrarComent">
            <font-awesome-icon icon="comment" />Abrir comentários
          </button>
          <div v-if="mostrarComent === post.id">
            <CommentsPostagens :post="post" :usuario="usuario"></CommentsPostagens>
            <button @click="mostrarComent = null" class="mostrarComent">
              <font-awesome-icon icon="comment" />Fechar Comentários
            </button>
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
  max-width: 40%;
  margin: 0 auto;
  margin-bottom: 35px;
}

.cima {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.esq {
  display: flex;
  align-items: center;
}

.dir {
  position: relative;
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

.text-black{
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

.btnsEditarDeletar {
  display: flex;
  flex-direction: column;
}

.editar:hover,
.deletar:hover,
.denunciar:hover {
  color: #f8d668;
  transform: scale(0.97);
  transition: 0.3s;
}

/*
checklist:
-- função adicionar imagem e fotos do usuario e das salas nos posts
-- colocar sala nos posts
-- (andre vai ajudar) apenas poder postar/comentar quando esta logado 

//////////////////////////// evita usar vuetify nao sei fazer css disso //////////////////////////////////////

*/
</style>

