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
watch(sala, (novaSala) => {
    if (novaSala) {
        nome.value = novaSala.nome
        descricao.value = novaSala.desc
        banner.value = novaSala.banner
    }
}, { immediate: true })
</script>
<template>
    EDITE
    <input v-model="nome">
    <input v-model="descricao">
    <input v-model="banner">
    <button @click="edit">Salvar alterações</button>
</template>
<style scoped></style>