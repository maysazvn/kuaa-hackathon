<script setup>

import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { salas } from '@/data/salas';

const route = useRoute();

const coisaPesquisada = ref(route.query.dado || '');

watch(
  () => route.query.dado,
  (novoDado) => {
    coisaPesquisada.value = novoDado || '';
  }
);

const salasFiltradas = computed(() => {
    const lista = salas.value; 

    if (!coisaPesquisada.value) return lista;

    const termo = coisaPesquisada.value.toLowerCase().trim();

    return lista.filter(sala => 
        sala.nome && sala.nome.toLowerCase().includes(termo)
    );
});


</script>

<template>
    <div>
        <div v-if="salasFiltradas.length > 0">
            <div v-for="sala in salasFiltradas" :key="sala.idSala || sala.id">
                <div>
                    {{ sala.nome }}
                </div>
            </div>
        </div>

        <div v-else>
            <p>Nenhuma sala encontrada para "{{ coisaPesquisada }}"</p>
        </div>
    </div>

</template>

<style scoped>


</style>