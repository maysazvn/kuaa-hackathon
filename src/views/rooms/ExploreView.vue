<script setup>
import CartSala from '@/components/cart/CartSala.vue';
import { salas } from '@/data/salas';
</script>

<template>
  <div class="tudo">

 
  <div class="container">
    <h1>Explorar Salas</h1>
    <section class="salas">
      <CartSala v-for="sala in salas" :key="sala.idSala" :idSala="sala.idSala" :nome="sala.nome" :participantes="sala.participantes" :desc="sala.desc" :usuarioCriador="sala.usuarioCriador" :status="sala.status">
      </CartSala>
    </section>
  </div> 
  </div>
</template>

<style scoped>
.tudo {
margin-left: 33vw;
}
</style>
