<script setup>

import { ref, watch, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { salas } from '@/data/salas';
import { users } from '@/views/user/Users';

const route = useRoute();

const coisaPesquisada = ref(route.query.dado || '');

watch(
  () => route.query.dado,
  (novoDado) => {
    coisaPesquisada.value = novoDado || '';
  }
);

const salasFiltradas = computed(() => {
    const lista = Array.isArray(salas) ? salas : salas.value || []; 

    if (!coisaPesquisada.value) return lista ;

    const termo = coisaPesquisada.value.toLowerCase().trim();

    return lista.filter(sala => 
        sala.nome && sala.nome.toLowerCase().includes(termo)
    );
});

const usersFiltrados = computed(() => {
    const lista = Array.isArray(users) ? users : users.value || []; 

    if (!coisaPesquisada.value) return lista ;

    const termo = coisaPesquisada.value.toLowerCase().trim();

    return lista.filter(user => 
        user.nome && user.nome.toLowerCase().includes(termo)
    );
});

</script>

<template>
        <div>
            <div v-if="salasFiltradas.length > 0">
                <div v-for="sala in salasFiltradas" :key="sala.idSala || sala.id " :idSala="sala.idSala">
                    <RouterLink :to="`/salas/${sala.idSala}`">
                        {{ sala.nome }}
                    </RouterLink>
                </div>
            </div>
            <div v-else>
                <p>Nenhuma sala encontrada para "{{ coisaPesquisada }}"</p>
            </div>
        </div>
        
        <div>
            <div v-if="usersFiltrados.length > 0">
                <div v-for="user in usersFiltrados" :key="user.id">
                    <RouterLink :to="`/otherProfile/${user.id}`">
                        {{ user.nome }}
                    </RouterLink>
                </div>
            </div>
            <div v-else>
                <p>Nenhum usuário encontrado para "{{ coisaPesquisada }}"</p>
            </div>
        </div>

</template>

<style scoped>


</style>