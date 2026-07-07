<script setup>
import CartSala from '@/components/cart/CartSala.vue';
import { salas } from '@/data/salas';
</script>

<template>

 
  <div class="container">
    <h1>Explorar Salas</h1>
    <section class="salas">
      <CartSala v-for="sala in salas" :key="sala.idSala" :idSala="sala.idSala" :nome="sala.nome" :participantes="sala.participantes" :desc="sala.desc" :usuarioCriador="sala.usuarioCriador" :status="sala.status">
      </CartSala>
    </section>
  </div> 

</template>

<style scoped>
.container{
  margin: 3vw 0 0 13vw;
  background-color: #1E1E1E;
  text-align: center;
}

 .salas{
  display: flex;
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr)); 
    gap: 4vw;
    margin: 0px auto;
    padding: 40px;
    width: 80%;
    position: relative;
 }

</style>
