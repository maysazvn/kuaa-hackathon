<script setup>

import { ref, watch, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { salas } from '@/data/salas';
import { users } from '@/views/user/Users';
import { postagens } from '@/data/postagens';
import Postagens from '../Postagens/Postagens.vue';

const route = useRoute();

const coisaPesquisada = ref(route.query.dado || '');
const itensExibidos = ref(15);

watch(
  () => route.query.dado,
  (novoDado) => {
    coisaPesquisada.value = novoDado || '';
  }
);

const salasFiltradas = computed(() => {
    const lista = Array.isArray(salas) ? salas : salas.value || []; 

    if (!coisaPesquisada.value) return [] ;

    const termo = coisaPesquisada.value.toLowerCase().trim();

    return lista.filter(sala => 
        sala.nome && sala.nome.toLowerCase().includes(termo)
    );

    
});

const usersFiltrados = computed(() => {
    const lista = Array.isArray(users) ? users : users.value || []; 

    if (!coisaPesquisada.value) return [];

    const termo = coisaPesquisada.value.toLowerCase().trim();

    return lista.filter(user => 
        user.nome && user.nome.toLowerCase().includes(termo)
    );

    
});

const postsFiltrados = computed(() => {
    const lista = Array.isArray(postagens) ? postagens : postagens.value || []; 

    if (!coisaPesquisada.value) return [];

    const termo = coisaPesquisada.value.toLowerCase().trim();

    return lista.filter(postagens => 
        postagens.conteudo && postagens.conteudo.toLowerCase().includes(termo)
    );
});

const totalResultados = computed(() => {
    return salasFiltradas.value.length + usersFiltrados.value.length + postsFiltrados.value.length;
}
)

const salasExibidas = computed(() => {
    return salasFiltradas.value.slice(0, itensExibidos.value);
});

const usersExibidos = computed(() => {
    const resto = Math.max(0, itensExibidos.value - salasExibidas.value.length);
    return usersFiltrados.value.slice(0, resto);
});

const postsExibidos = computed(() => {
    const resto = Math.max(0, itensExibidos.value - salasExibidas.value.length - usersExibidos.value.length);
    return postsFiltrados.value.slice(0, resto);
});

function carregarMais() {
    itensExibidos.value += 15;
}

</script>

<template>
    <div >

    
        <div>   
            <div v-if="salasFiltradas.length > 0">
                <div v-for="sala in salasExibidas" :key="sala.idSala || sala.id " :idSala="sala.idSala" :banner="sala.banner">
                    <RouterLink :to="`/salas/${sala.idSala}`">
                        <img :src="sala.banner" alt="">
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
                <div v-for="user in usersExibidos" :key="user.id" :pfp="user.pfp">
                    <RouterLink :to="`/otherProfile/${user.id}`">
                        <img :src="user.pfp" alt="">
                        {{ user.nome }}
                    </RouterLink>
                </div>
            </div>
            <div v-else>
                <p>Nenhum usuário encontrado para "{{ coisaPesquisada }}"</p>
            </div>
        </div>

        <div>
            <div v-if="postsFiltrados.length > 0">
                <Postagens :posts="postsExibidos" />
            </div>
            <div v-else>
                <p>Nenhuma postagem encontrada para "{{ coisaPesquisada }}"</p>
            </div>
        </div>

        <div v-if="itensExibidos < totalResultados">
            <button @click="carregarMais">Ver mais</button>
        </div>


    </div>

</template>

<style scoped>


</style>