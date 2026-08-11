<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { salas } from '@/data/salas'


const route = useRoute()

console.log("ID da rota:", route.params.id)
console.log("Salas:", salas.value)

const sala = computed(() =>
    salas.value.find(s => s.idSala == route.params.id)
)

console.log("Sala encontrada:", sala.value)
</script>
<template>
    <div class="sala" v-if="sala">
        <img :src="sala.banner">

        <h1>{{ sala.nome }}</h1>

        <p>{{ sala.desc }}</p>
    </div>
    <div class="sala" v-else>
        <h1>Sala não encontrada</h1>
    </div>
</template>
<style scoped>
.sala {
    margin-left: 25rem;
}
</style>