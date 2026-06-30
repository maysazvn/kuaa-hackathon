<script setup>
import { salas } from '@/data/salas';
 defineProps(["idSala", "nome", "participantes", "desc", "usuarioCriador", "status"])
</script>

<template>
  <div class="container">
    <h1>Explorar Salas</h1>
    <section class="salas">
      <salas v-for="sala in salas" :key="sala.idSala" :idSala="sala.idSala" :nome="sala.nome" :participantes="sala.participantes" :desc="sala.desc" :usuarioCriador="sala.usuarioCriador" :status="sala.status">
      </salas>
    </section>
  </div>
</template>

<style scoped>
</style>
