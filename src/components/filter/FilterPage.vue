<script setup>
import { ref, watch, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { salas } from '@/data/salas'
import { users } from '@/views/user/Users'

const route = useRoute()

const coisaPesquisada = ref(route.query.dado || '')

watch(
  () => route.query.dado,
  (novoDado) => {
    coisaPesquisada.value = novoDado || ''
  },
)

const salasFiltradas = computed(() => {
  const lista = Array.isArray(salas) ? salas : salas.value || []

  if (!coisaPesquisada.value) return ''

  const termo = coisaPesquisada.value.toLowerCase().trim()

  return lista.filter((sala) => sala.nome && sala.nome.toLowerCase().includes(termo))
})

const usersFiltrados = computed(() => {
  const lista = Array.isArray(users) ? users : users.value || []

  if (!coisaPesquisada.value) return ''

  const termo = coisaPesquisada.value.toLowerCase().trim()

  return lista.filter((user) => user.nome && user.nome.toLowerCase().includes(termo))
})
</script>

<template>
  <div class="container">
    <div class="secao-resultado">
      <h2>Salas</h2>
      <div v-if="salasFiltradas.length > 0" class="resultado">
        <div
          v-for="sala in salasFiltradas"
          :key="sala.idSala || sala.id"
          :idSala="sala.idSala"
          :banner="sala.banner"
          class="card-item"
        >
          <RouterLink :to="`/salas/${sala.idSala}`" class="link">
            <img :src="sala.banner" alt="" class="img-sala"/>
            <span>{{ sala.nome }}</span>
          </RouterLink>
        </div>
      </div>
      <div v-else class="vazio">
        <p>Nenhuma sala encontrada para "{{ coisaPesquisada }}"</p>
      </div>
    </div>

    <div class="secao-resultado">
      <h2>Usuários</h2>
      <div v-if="usersFiltrados.length > 0" class="resultado">
        <div v-for="user in usersFiltrados"
        :key="user.id"
        :pfp="user.pfp"
        class="card-item"
        >
          <RouterLink :to="`/otherProfile/${user.id}`" class="link">
            <img :src="user.pfp" alt="" class="img-usuario"/>
            <span>{{ user.nome }}</span>
          </RouterLink>
        </div>
      </div>
      <div v-else class="vazio">
        <p>Nenhum usuário encontrado para "{{ coisaPesquisada }}"</p>
      </div>
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
</style>
