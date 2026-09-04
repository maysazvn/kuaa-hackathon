<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['post', 'usuario'])

let comentarios = ref([
  {
    id: 0,
    texto: 'Não entendi, alguem me explica?',
    usu: 'NeymarJr',
    aberto: false,
  },
  {
    id: 1,
    texto: 'Não sei isso, mas  o @kklmao sabe!',
    usu: 'Krasue',
    aberto: false,
  },
  {
    id: 2,
    texto: 'O artigo 11 do cód.Penal pode te ajudar amigo!',
    usu: 'fbigatito',
    aberto: false,
  },
])

const usuarioLogado = ref('H')
const novoComent = ref('')
const chaveStorage = `comentarios_${props.post.id}`

onMounted(() => {
  const salvos = localStorage.getItem(chaveStorage)

  if (salvos) {
    comentarios.value = JSON.parse(salvos)
  }
})

function comentar() {
  if (!novoComent.value.trim()) {
    alert(`Preencha os campos!!`)
  } else {
    let maiorId = Math.max(...comentarios.value.map((item) => item.id))

    const novoNoComentario = {
      texto: novoComent.value,
      usu: usuarioLogado.value,
      data: Date(Date.now()).toLocaleString('pt-BR'),
      id: maiorId + 1,
    }

    comentarios.value.unshift(novoNoComentario)

    novoComent.value = ''
    localStorage.setItem(chaveStorage, JSON.stringify(comentarios.value))
  }
}

function excluir(idItem) {
  comentarios.value = comentarios.value.filter((c) => c.id !== idItem)
  localStorage.setItem(chaveStorage, JSON.stringify(comentarios.value))
}

function editar(comentario) {
  const index = comentarios.value.findIndex((c) => c.id === comentario.id)

  if (index !== -1) {
    const edicao = prompt(`Edite o seu comentario...`, comentario.texto)

    if (edicao !== null) {
      comentarios.value[index].texto = edicao
      localStorage.setItem(chaveStorage, JSON.stringify(comentarios.value))
    }
  }
}
// ////

function mostrarItens(comentario) {
  comentario.aberto = !comentario.aberto
}

function denunciar() {
  alert('Comentário denunciado com sucesso.')
}
</script>
<template>
  <section>
    <div class="comentarios">
      <div class="comentar">
        <textarea placeholder="O que está pensando?" v-bind="texto" v-model="novoComent"></textarea>
      </div>
      <button type="submit" @click="comentar()" class="comentarBtn">Comentar</button>

      <div class="todos" v-for="comentario in comentarios" :key="comentario.id">
        <div class="cima">
          <h2 class="usuario">@{{ comentario.usu }}</h2>
          <button class="editarDeletar" v-on:click="mostrarItens(comentario)">•••</button>

          <div class="vshow" v-show="comentario.aberto">
            <div v-if="comentario.usu === usuarioLogado" class="btnsEditarDeletar">
              <button @click="editar(comentario)" class="editar">Editar</button>
              <button @click="excluir(comentario.id)" class="deletar">Excluir</button>
            </div>

            <div v-else>
              <button @click="denunciar()" class="denunciar">Denunciar</button>
            </div>
          </div>
        </div>
        <p class="texto">{{ comentario.texto }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.comentarios {
  border-top: 2px solid #3e3e3e;
}

textarea {
  border: 2px solid #3e3e3e;
  width: 450px !important;
  height: 90px !important;
  border-radius: 10px;
  margin-top: 25px;
  resize: none;
  outline: none;
  padding: 5px 10px;
}

.cima {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

textarea:focus {
  border: 2px solid #f8d76bb8;
}

div.todos {
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #3e3e3e;
  padding: 5px;
  padding-bottom: 20px;
}

h2.usuario {
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
}

p.texto {
  overflow-wrap: break-word;
  max-width: 20vw;
  margin: 2px;
}

button.comentarBtn {
  background: #f8d76b;
  color: #1e1e1e;
  font-weight: bold;
  border-radius: 10px;
  padding: 5px 15px;
  margin: 5px 0;
}

button.comentarBtn:hover {
  opacity: 0.9;
  transform: scale(0.95);
  transition: 0.2s;
}

button.editarDeletar {
  background: transparent;
  border: none;
  color: inherit;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 2px 8px;
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
</style>
