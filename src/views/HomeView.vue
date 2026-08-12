<script setup>
import { computed, ref } from 'vue'
import { salas } from '@/data/salas'

const usuarioLogado = ref({
  nome: 'chuvsmilo',
  salasInscritas: [1, 2],
})

const postagensTemporarias = ref([
  {
    idPost: 1,
    idSala: 1,
    titulo: 'Brincadeira piadas também fotos',
    conteudo: 'Não pode sem camisa homens',
    autor: 'Sérgio',
    data: '25/05/2027',
    curtidas: 12,
  },
  {
    idPost: 2,
    idSala: 1,
    titulo: 'Como derrotar um fantasma',
    conteudo: 'tentei chegar com fogo perto dele e quase morri, preciso de métodos mais eficientes',
    autor: 'ghostbusters',
    data: '09/05/2027',
    curtidas: 22,
  },
  {
    idPost: 3,
    idSala: 2,
    titulo: 'queria estudar mais',
    conteudo: 'me proíbam de usar instagram',
    autor: 'bof',
    data: '15/08/2026',
    curtidas: 4,
  },
  {
    idPost: 4,
    idSala: 3,
    titulo: 'Química',
    conteudo: 'quantos mols de pessoas tem nessa sala?',
    autor: 'Rochelle',
    data: '12/06/2026',
    curtidas: 205,
  },
])

const postsTimeline = computed(() => {
  return postagensTemporarias.value.filter((post) => {
    const inscrito = usuarioLogado.value.salasInscritas.includes(post.idSala)
    const viral = post.curtidas >= 150
    return inscrito || viral
  })
})

function pegarSala(idSala) {
  const sala = salas.value.find((room) => (room.idSala || room.id) === idSala)
  return sala ? sala.nome : 'Sla'
}
</script>

<template>
  <div class="container">
    <div class="postar">
      <div class="imginput">
        <img src="../../public/kuaa.png" alt="icone de perfil do usuario" />
        <input type="text" placeholder="Qual é seu tema de estudo agora?" />
      </div>

      <div class="botao">
        <div v-for="sala in usuarioLogado" :key="sala.idSala" class="salasPostar">
          <span @click="teste"> ! {{ sala.salasInscritas }}</span>
        </div>

        <div>
          <button class="botaoPostar" type="submit">Postar</button>
        </div>
      </div>
    </div>

    <div class="semPosts" v-if="postsTimeline.length === 0">
      <p>Ainda não há posts. Experimente entrar em uma sala!</p>
    </div>

    <div class="feed" v-else>
      <div class="posts" v-for="post in postsTimeline" :key="post.id">
        <div class="identificacao">
          <span class="salas" v-if="usuarioLogado.salasInscritas.includes(post.idSala)"
            >Em {{ pegarSala(post.idSala) }}</span
          >
          <span class="salas" v-else>Em alta em {{ pegarSala(post.idSala) }}</span>
        </div>

        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 3vw;
}

div {
  color: white;
}

.postar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.postar img {
  border-radius: 100%;
  width: 80px;
}

input {
  outline: none;
  border: none;
  width: 80vw;
}

.botao {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.botao span {
  cursor: pointer;
  padding: 5px 15px;
  background-color: #313131;
  border-radius: 15px;
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
  opacity: calc(0.8);
  transform: scale(0.95);
}

.imginput {
  display: flex;
  gap: 15px;
}
</style>
