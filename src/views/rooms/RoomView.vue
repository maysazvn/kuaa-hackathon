<!-- read salas/comunidades -->
<script setup>
import { useRouter } from 'vue-router'
import { salas } from '@/data/salas'
import { ref } from 'vue'
import { userReal } from '../account/login/UserReal'
const router = useRouter()
const nome = ref('')
const descricao = ref('')
const banner = ref('')
const coisa = ref(1)
const membros = ref(0)
const mensagem = 'Algum campo obrigatorio deixou de ser prenchido'
function cancelar() {
  router.push('/')
}
function criar() {
  if (nome.value === '' || descricao.value === '') {
    alert(mensagem)
    return
  } else {
    salas.value.push({
      idSala: Date.now(),
      nome: nome.value,
      desc: descricao.value,
      banner: banner.value,
      status: coisa.value,
      usuarioCriador: userReal.value,
      participantes: membros.value,
    })
  }

  console.log(salas.value)

  nome.value = ''
  descricao.value = ''
  banner.value = ''

  router.push('/')
}

// function gerar() {
//   banner.value
// }
</script>

<template>
  <div class="container">
    <h1 class="tituloCriarSala"><font-awesome-icon icon="chevron-left" /> Criar Sala</h1>

    <div class="criarSala">
      <div class="conteudo">
        <div class="img">
          <img
            class="imagem"
            :src="
              banner || 'https://i.pinimg.com/736x/ed/b6/06/edb606bf10aad2fdfd3a854758ee0042.jpg'
            "
          />

          <input v-model="banner" placeholder="Insira o URL da imagem" />
        </div>

        <div class="campos">
          <div class="campo">
            <label>Nome da Sala</label>
            <div class="input">
              <input
                v-model="nome"
                type="text"
                placeholder="Insira o nome da sala"
                maxlength="25"
              />
              <span class="contador">{{ nome.length }}/25</span>
            </div>
          </div>

          <div class="campo">
            <label>Descrição</label>
            <div class="input">
              <textarea
                v-model="descricao"
                type="text"
                placeholder="Descreva a sala"
                maxlength="300"
              ></textarea>
              <span class="contador">{{ descricao.length }}/300</span>
            </div>
          </div>
        </div>
      </div>

      <div class="botoes">
        <button @click="criar" class="btnCriar">Criar</button>
        <button @click="cancelar" class="btnCancelar">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 850px;
  margin: 0 auto;
  padding: 20px;
  color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tituloCriarSala {
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  font-family: 'Prompt', sans-serif;
  width: 100%;
}

.criarSala {
  background-color: #242424;
  border-radius: 20px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-shadow: 0 0 15px #00000049;
  width: 100%;
}

.conteudo{
  display: flex;
  gap: 30px;
  width: 100%;
}

.img {
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.imagem {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 18px;
  background-color: #ffffff;
  position: relative;
}

.img input {
  border: 2px solid #3c3c3c;
  border-radius: 10px;
  padding: 6px 10px;
  color: #8f8f8f;
  width: 100%;
  max-width: 500px;
  resize: none;
  outline: none;
}

.img input:focus {
  border-color: #f8d668c5;
}

.campos {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.campo label {
  font-size: 1.1rem;
  font-weight: bold;
  color: #d9d9d9;
}

.input {
  position: relative;
  display: flex;
  align-items: center;
}

.input input,
.input textarea {
  border: 2px solid #3c3c3c;
  border-radius: 10px;
  padding: 6px 10px;
  color: #8f8f8f;
  width: 100%;
  max-width: 500px;
  resize: none;
  outline: none;
}

.input textarea {
  height: 90px;
  width: 300px;
}

.input input:focus,
.input textarea:focus {
  border-color: #f8d668c5;
}

.contador {
  color: #8f8f8f;
  font-size: 0.8rem;
  position: absolute;
  left: 310px;
  bottom: 10px;
}

.botoes {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
}

.btnCriar,
.btnCancelar {
  background-color: #f4d068;
  color: #1e1e1e;
  padding: 5px 40px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.btnCriar:hover,
.btnCancelar:hover {
  opacity: 0.9;
  transform: scale(0.97);
  transition: 0.3s;
}

.btnCancelar {
  background: #848484;
}
</style>
