<script setup>
import CartSala from '@/components/cart/CartSala.vue';
import { salas } from '@/data/salas';
import { salasUsuario } from '@/data/salasUsuario';
function enviar(sal){
salasUsuario.value.push(sal)
}
</script>

<template>
  <div class="container">
<div class="titulo">
    <RouterLink to="/">
      Voltar
    </RouterLink>
 </div>
    <h1>Explorar Salas</h1>
    <section class="salas">
      <CartSala v-for="sala in salas" :key="sala.idSala" :idSala="sala.idSala" :nome="sala.nome" :participantes="sala.participantes" :desc="sala.desc" :usuarioCriador="sala.usuarioCriador" :banner="sala.banner" :status="sala.status">
       <RouterLink :to="`/salas/${sala.idSala}`">
          Vizualizar
        </RouterLink>
        <button v-on:click="enviar(sala)"> 
          Entrar
        </button>
  </CartSala>
    </section>
  </div> 

</template>

<style scoped>
.button {
  color: aqua;
}
.container{
  margin: 3vw 0 0 2vw;
  background-color: #1E1E1E;
  text-align: center;
}

 .salas{
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr)); 
    gap: 4vw;
    margin: 0px auto;
    padding: 40px;
    width: 80%;
    position: relative;
 }
 .titulo{
  display: flex;
  align-items: center;

 }
</style>
