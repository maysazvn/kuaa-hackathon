<script setup>

import { ref, onMounted } from 'vue';
import CommentsPostagens from './CommentsPostagens.vue';
import CriarPost from './CriarPost.vue';
import { postagens } from '@/data/postagens.js';


 let usuario = ref('cofeeBarney')
const mostrarComent = ref(null);
import { shallowRef } from 'vue'
const dialog = shallowRef(false)

const storage = `postagens_${postagens.id}`


onMounted(() => {
  const salvos = localStorage.getItem(storage)

  if (salvos) {
    postagens.value = JSON.parse(salvos)
  }
})

function excluir(idItem) {
   postagens.value = postagens.value.filter(post => post.id !== idItem)
     localStorage.setItem(storage, JSON.stringify(postagens.value))

}
function editar(post) {
    const index = postagens.value.findIndex(p => p.id === post.id)

    if (index !== -1) {
        const edicao = prompt(`Edite o seu post...`, post.conteudo)

        if (edicao !== null) {
     postagens.value[index].conteudo = edicao}}
      localStorage.setItem(storage, JSON.stringify(postagens.value))
}


</script>

<template>

    <section>
    <div>

    <h3>Postagens</h3>

 <div class="postagenss" v-for="post in postagens" :key="post.id" :usuario="usuario">

    <div class="listaPosts">

                <h2>
                   {{ post.titulo }}
                </h2>
                <p class="conteudo">
                    {{ post.conteudo }}
                </p>
                   <p class="autor">
                    <small><strong>
                       por  {{ post.autor }}
                    </strong></small>
                </p>
                <p>
                    <small>
                        {{post.data}}
                    </small>
                </p>
             <div v-if="post.autor === usuario">

            <button @click.prevent="excluir(post.id)" >Excluir</button>
            <button @click="editar(post)">Editar</button>

        </div>
<button @click="mostrarComent = post.id" v-show="!mostrarComent">Ver Comentários</button>
<div v-if="mostrarComent === post.id">
    <CommentsPostagens :post='post' :usuario='usuario'></CommentsPostagens>
    <button @click="mostrarComent = null">Fechar Comentários</button>
</div>
    </div>
        </div>

    </div>
  
  <div class="pa-4 text-center">
      <v-dialog v-model="dialog" max-width="600">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            class="text-none font-weight-regular"
            text="+"
            variant="tonal"
            v-bind="activatorProps"

          > <span class="text-black" size="large">+</span></v-btn>
        </template>

        <CriarPost @adicionar="adicionar" @fechar="dialog = false"/>
      </v-dialog>
    </div>
    </section>
    
</template>

<style scoped>

div.listaPosts {
    border: solid 2px black;
    padding: 30px;
    max-width: 30%;
    margin: 0 auto;
    margin-bottom: 35px;
}

button {
    border: SOLID black 2px;
    border-radius: 25px;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
}

input {
    border: 1px black solid;;
}

textarea {
        border: 1px black solid;;
}

div.postar {
    display: flex;
    flex-direction: column;
    max-width: 30%;
    margin: 0 auto;
    margin-bottom: 30px;
}

h3{
    font-size: 60px;
    text-align: center;
    font-weight: bolder;
}
p.autor {
    margin: 0 0;
}

p.conteudo {
    font-size: 1.2rem;
}

.text-none{
    background-color: #F8D76B;
}
.text-none:hover{
    transition: 0.5s;
    transform: scale(1.1);
    cursor: pointer;
}

</style>