<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { salas } from '@/data/salas'
defineProps (['nome', 'desc', 'banner'])

const route = useRoute()

console.log("ID da rota:", route.params.id)
console.log("Salas:", salas.value)

const sala = computed(() =>
  salas.value.find(s => s.id == route.params.id)
)

console.log("Sala encontrada:", sala.value)
</script>
<template>
    <div class="sala" v-if="sala">
        <img :src="banner">

        <h1>{{ nome }}</h1>

        <p>{{ desc }}</p>
    </div>
</template>
<style scoped>
.sala {
    margin-left: 25rem;
    font-size: 10vw;
}
</style>