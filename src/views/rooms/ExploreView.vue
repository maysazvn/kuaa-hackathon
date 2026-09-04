<script setup>
import CartSala from '@/components/cart/CartSala.vue'
import { salas } from '@/data/salas'
import { salasUsuario } from '@/data/salasUsuario'
function estaNaSala(idSala) {
  return salasUsuario.value.some((i) => i.idSala === idSala)
}
function sair(saal) {
  console.log(salasUsuario.value, saal)
  salasUsuario.value = salasUsuario.value.filter((i) => i.idSala != saal.idSala)
  console.log(salasUsuario.value, saal)
  
}
function enviar(sal) {
  if (!estaNaSala(sal.idSala)) {
    salasUsuario.value.push(sal)
  }
}
</script>

<template>
  <div class="container">
    <div class="titulo">
      <RouterLink to="/" class="voltar"> <font-awesome-icon icon="chevron-left"></font-awesome-icon> Explorar salas</RouterLink>
    </div>
    <section class="salas">
      <CartSala
        v-for="sala in salas"
        :key="sala.idSala"
        :idSala="sala.idSala"
        :nome="sala.nome"
        :participantes="sala.participantes"
        :desc="sala.desc"
        :usuarioCriador="sala.usuarioCriador"
        :banner="sala.banner"
        :status="sala.status"
      >
      <div class="nav">
        <RouterLink :to="`/salas/${sala.idSala}`" class="visualizar"> Visualizar </RouterLink>
        <button v-on:click="enviar(sala)" v-if="!estaNaSala(sala.idSala)" class="btn-entrar">Entrar</button>
        <button v-on:click="sair(sala)" v-else class="btn-sair">Sair</button>
        </div>
      </CartSala>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

a.voltar{
  font-size: 2rem;
  font-family: 'Prompt', sans-serif;
  font-weight: bold;
  color: #E0D8C3;
}

.titulo {
  display: flex;
  align-items: center;
}

.salas {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2vw;
  margin: 0px auto;
  padding: 40px;
  font-size: 1.2rem;
}

.nav{
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 5px;
}

a.visualizar{
  background: #F8D76B;
  font-weight: bold;
  color: #1e1e1e;
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
  border-color: #e53935;
}

a.visualizar,
.btn-entrar,
.btn-sair {
  font-weight: bold;
  font-size: 0.95rem;
  padding: 5px 15px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

button{
  background: #F8D76B;
  font-weight: bold;
  border-radius: 10px;
  padding: 1px 10px;
}

a.visualizar:hover{
  opacity: 0.9;
  transform: scale(0.95);
  transition: .2s;
}

button:hover{
  opacity: 0.9;
  transform: scale(0.95);
  transition: .2s;
}

.container {
  text-align: center;
}

</style>
