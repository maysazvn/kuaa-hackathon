<script setup>

import { ref } from 'vue';

let postagens = ref([
    {
    id: 1, titulo:'Esse é o bobby', conteudo: 'conteudo super importante', autor: 'usuariobobby', data: '24/06/2009'}
]);

 let usuario = ref('NN')


const postagensTituloNovo = ref('')
const postagensConteudoNovo = ref('')
const postagensAutorNovo = ref('')

function adicionar() {
    const novoPost = {
        titulo: postagensTituloNovo.value,
     conteudo: postagensConteudoNovo.value,
        autor: postagensAutorNovo.value,
        data:  Date(Date.now()).toLocaleString('pt-BR')
    }

    postagens.value.unshift(novoPost)

    postagensAutorNovo.value = '';
    postagensConteudoNovo.value = '';
    postagensTituloNovo.value = '';
}

function excluir(idItem) {
   postagens.value = postagens.value.filter(postagens => postagens.id !== idItem)
}



</script>

<template>

    <div>


 <div class="postar">
        <h2>Criar post</h2>

        <input type="text" v-model="postagensTituloNovo" placeholder="Titulo"> 
        <input type="text" v-model="postagensAutorNovo" placeholder="Usuario">
        <textarea v-model="postagensConteudoNovo" placeholder="estou com dificuldade em..."></textarea>
        <button @click="adicionar">
            Postar
        </button>




    </div>
 <div class="postagenss" v-for="post in postagens" :key="post.id" :usuario="usuario">

    <div class="listaPosts">
    <h3>Postagens</h3>

                <h2>
                   {{ post.titulo }}
                </h2>
                <p>
                    {{ post.conteudo }}
                </p>
                <p>
                    {{post.data}}
                </p>


    </div>

     <div v-if="post.autor === usuario">

            <button @click.prevent="excluir(post.id)" >Excluir</button>
            <button>Editar</button>

        </div>
          

        </div>

       


    </div>
   
    
</template>

<style scoped>

div.listaPosts {
    border: solid 2px black;
    padding: 30px;
    max-width: 30%;
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
}
</style>