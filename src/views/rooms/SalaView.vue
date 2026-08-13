<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { salas } from '@/data/salas'

const route = useRoute()
const router = useRouter()
const popupExcluir = ref(false)
const menuAberto = ref(false)

console.log('ID da rota:', route.params.id)
console.log('Salas:', salas.value)

const sala = computed(() => salas.value.find((s) => s.idSala == route.params.id))
function confirmarEx() {
    const index = salas.value.findIndex((s) => s.idSala == route.params.id)
    if (index !== -1) {
        salas.value.splice(index, 1)
    }

    popupExcluir.value = false
    router.push('/explore')
}
function excluirSala() {
    popupExcluir.value = true
}
function editarSala() {
    router.push(`/salas/${route.params.id}/editar`)
}


console.log('Sala encontrada:', sala.value)
</script>
<template>
    <div class="sala" v-if="sala">
        <div class="menu">
            <button class="menubotao" @click="menuAberto = !menuAberto">#</button>
            <div class="menuaberto" v-if="menuAberto">
                <button @click="excluirSala">Excluir sala</button>
                <button @click="editarSala">Editr Sala</button>
            </div>
        </div>

        <img :src="sala.banner" />

        <h1>{{ sala.nome }}</h1>

        <p>{{ sala.desc }}</p>
        <div v-if="popupExcluir" class="telapopup">
            <div class="popup">
                <h2>Tem certeza que deseja excluir sua sala?</h2>
                <p>Esta ação é permanente e todos os seus dados, salas e posts serão perdidos para sempre.</p>
                <div class="botoes">
                    <button @click="confirmarEx">Sim</button>
                    <button @click="popupExcluir = false">Não</button>
                </div>
            </div>
        </div>
    </div>
    <div class="sala" v-else>
        <h1>Sala não encontrada</h1>
    </div>
</template>
<style scoped>
.sala {
    margin-left: 25rem;
}

.telapopup {
    background-color: blueviolet;
}
.menuaberto {
    display: grid;
}
</style>
