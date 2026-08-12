<script setup>

import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { salas } from '@/data/salas';

const route = useRoute();

const coisaPesquisada = ref('');

watch(
    () => route.query.dado,
    (novoDado) => {
        if(novoDado) {
            coisaPesquisada.value = novoDado;
        }
    }
)

const salasFiltradas = computed(() => {
    if(!coisaPesquisada.value)
    return salas.filter(sala => sala.nome === coisaPesquisada.value);
}
)
console.log(coisaPesquisada)

</script>

<template>
    <div v-for="sala in salasFiltradas" :key="sala.idSala">
        <div>
            {{ sala.nome }}
        </div>
    </div>

</template>

<style scoped>


</style>