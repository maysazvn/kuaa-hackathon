<script setup>
import { salas } from '@/data/salas';
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const nome = ref('')
const descricao = ref('')
const banner = ref('')

const sala = computed(() =>
    salas.value.find(s => s.idSala == route.params.id)
)

function edit() {
    sala.value.nome = nome.value
    sala.value.desc = descricao.value
    sala.value.banner = banner.value
    router.push(`/salas/${route.params.id}`)
}
function cancelar() {
    router.push(`/salas/${sala.value.idSala}`)
}
watch(sala, (novaSala) => {
    if (novaSala) {
        nome.value = novaSala.nome
        descricao.value = novaSala.desc
        banner.value = novaSala.banner
    }
}, { immediate: true })
</script>
<template>
    <h1>Perfil de Sala</h1>
    <p>Nome da Sala</p>
    <input v-model="nome">
    <p>Descrição</p>
    <input v-model="descricao">
    <p>Foto</p>  <!-- p temporario pra sinalizar p banner edita ali -->
    <input v-model="banner">
    <button @click="edit">Salvar alterações</button>
    <button @click="cancelar">Cancelar</button>
</template>
<style scoped></style>