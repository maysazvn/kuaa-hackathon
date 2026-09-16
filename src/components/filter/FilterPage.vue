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

let soSala = ref(true);
let soUser = ref(true);
let soPost = ref(true);

watch(
  () => route.query.dado,
  (novoDado) => {
    coisaPesquisada.value = novoDado || ''
  },
)

const salasFiltradas = computed(() => {
    const lista = Array.isArray(salas) ? salas : salas.value || []; 
    if (!coisaPesquisada.value) return [];
    const termo = coisaPesquisada.value.toLowerCase().trim();
    return lista.filter(sala => sala.nome && sala.nome.toLowerCase().includes(termo));
});

const usersFiltrados = computed(() => {
    const lista = Array.isArray(users) ? users : users.value || []; 
    if (!coisaPesquisada.value) return [];
    const termo = coisaPesquisada.value.toLowerCase().trim();
    return lista.filter(user => user.nome && user.nome.toLowerCase().includes(termo));
});

const postsFiltrados = computed(() => {
    const lista = Array.isArray(postagens) ? postagens : postagens.value || []; 
    if (!coisaPesquisada.value) return [];
    const termo = coisaPesquisada.value.toLowerCase().trim();
    return lista.filter(post => post.conteudo && post.conteudo.toLowerCase().includes(termo));
}); 

const salasExibidas = computed(() => {
    if (!soSala.value) return [];
    return salasFiltradas.value.slice(0, itensExibidos.value);
});

const usersExibidos = computed(() => {
    if (soSala.value && soPost.value) {
    const resto = Math.max(0, itensExibidos.value - salasExibidas.value.length);
    return usersFiltrados.value.slice(0, resto);
    }

    return usersFiltrados.value.slice(0, itensExibidos.value);
});

const postsExibidos = computed(() => {

    if (soSala.value && soUser.value) {
    const resto = Math.max(0, itensExibidos.value - salasExibidas.value.length - usersExibidos.value.length);
    return postsFiltrados.value.slice(0, resto);
    }

    return postsFiltrados.value.slice(0, itensExibidos.value);
});

const totalFiltrado = computed(() =>{
    let total = 0;
    if (soSala.value){
        total += salasFiltradas.value.length;
    }
    if (soUser.value){
        total += usersFiltrados.value.length;
    }
    if (soPost.value){
        total += postsFiltrados.value.length;
    }

    return total;
});

const totalExibido = computed(() => {
    return salasExibidas.value.length + usersExibidos.value.length + postsExibidos.value.length;
})

function carregarMais() {
    itensExibidos.value += 15;
}


function resetarFiltros() {
    soSala.value = false;
    soUser.value = false;
    soPost.value = false;
}

function filtrando(valor) {
    resetarFiltros();
    itensExibidos.value = 15;
    
    if (valor === 'sala') {
        soSala.value = true;
    } else if (valor === 'user') {
        soUser.value = true;
    } else if (valor === 'post') {
        soPost.value = true;
    } else {
        soSala.value = true;
        soUser.value = true;
        soPost.value = true;
    }
}
</script>

<template>
    <div class="container">
        <div>
            <select name="filtrar" id="filtro" @change="filtrando($event.target.value)">
                <option value="tudo">Tudo</option>
                <option value="sala">Salas</option>
                <option value="user">Usuários</option>
                <option value="post">Postagens</option>
            </select>
        </div>

        <div v-show="soSala" class="secao-resultado">   
            <div v-if="salasFiltradas.length > 0" class="resultado">
                <div v-for="sala in salasExibidas" :key="sala.idSala || sala.id" class="card-item">
                    <RouterLink :to="`/salas/${sala.idSala}`" class="link">
                        <img :src="sala.banner" alt="" class="img-sala">
                        {{ sala.nome }}
                    </RouterLink>
                </div>
            </div>
            <div v-else-if="coisaPesquisada" class="vazio">
                <p>Nenhuma sala encontrada para "{{ coisaPesquisada }}"</p>
            </div>
        </div>
        
        <div v-show="soUser" class="secao-resultado">
            <div v-if="usersFiltrados.length > 0" class="resultado">
                <div v-for="user in usersExibidos" :key="user.id" class="card-item">
                    <RouterLink :to="`/otherProfile/${user.id}`" class="link">
                        <img :src="user.pfp" alt="" class="img-usuario">
                        {{ user.nome }}
                    </RouterLink>
                </div>
            </div>
            <div v-else-if="coisaPesquisada" class="vazio">
                <p>Nenhum usuário encontrado para "{{ coisaPesquisada }}"</p>
            </div>
        </div>

        <div v-show="soPost">
            <div v-if="postsFiltrados.length > 0">
                <Postagens :posts="postsExibidos" />
            </div>
            <div v-else-if="coisaPesquisada">
                <p>Nenhuma postagem encontrada para "{{ coisaPesquisada }}"</p>
            </div>
        </div>

        <div v-if="totalExibido < totalFiltrado">
            <button @click="carregarMais">Ver mais</button>
        </div>
    </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  color: #d9d9d9;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.secao-resultado h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #E0D8C3;
  margin-bottom: 15px;
  font-family: 'Prompt', sans-serif;
}

.resultado {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
}

.card-item {
  background-color: #242424;
  border: 1px solid #333333;
  border-radius: 15px;
  padding: 10px;
}

.card-item:hover {
  background-color: #2e2e2e;
  transform: translateY(-3px);
  transition: .2s;
}

.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.link span{
  font-weight: bold;
  color: #8f8f8f;
}

.img-sala {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
}

.img-usuario {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
}

.vazio {
  background-color: #1e1e1e;
  border: 1px solid #3d3d3d;
  border-radius: 10px;
  padding: 15px 20px;
  color: #8f8f8f;
}

@media (max-width: 768px) {

  .resultado{
    display: flex;
    flex-direction: column;
  }

}
</style>
