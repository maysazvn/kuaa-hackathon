<script setup>
import { salasUsuario } from '@/data/salasUsuario'
import { salas } from '@/data/salas'
import { loginOut } from '@/views/account/login/Loginout'


const props = defineProps({
  sala: {
    type: Object,
    required: true
  }
})

function estaNaSala() {
  return salasUsuario.value.some(
    (i) => i.idSala === props.sala.idSala
  )
}

function entrar() {
  if(loginOut.value === 'ativo'){
  if (!estaNaSala()) {
    salasUsuario.value.push(props.sala)
    props.sala.participantes++
  }
}else{
  alert('Faça login para entrar!')
}
}

function sair() {
  const index = salasUsuario.value.findIndex(
    (i) => i.idSala === props.sala.idSala
  )

  if (index !== -1) {
    salasUsuario.value.splice(index, 1)
    props.sala.participantes--
  }
}
</script>

<template>
 <button v-if="estaNaSala()" @click="sair" class="btn-sair">
    Sair
  </button>

  <button v-else @click="entrar" class="btn-entrar">
    Entrar
  </button>
</template>

<style scoped>
.btn-entrar,
.btn-sair {
  font-weight: bold;
  font-size: 0.95rem;
  padding: 5px 15px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-entrar {
  background: #F8D76B;
  color: #1e1e1e;
}

.btn-sair {
  background-color: #3c3c3c;
  color: #d9d9d9;
}

.btn-sair:hover {
  background-color: #e53935;
  color: #ffffff;
}

button:hover {
  opacity: 0.9;
  transform: scale(0.95);
}
</style>