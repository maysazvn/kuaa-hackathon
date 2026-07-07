<script setup>

import { ref } from 'vue';
import CommentsPostagens from './CommentsPostagens.vue';

let postagens = ref([
    {
    id: 1, titulo:'Esse é o bobby', conteudo: 'conteudo super importante', autor: 'usuariobobby', data: '24/06/2009'}, {
    id: 2, titulo:'NÃO SEI VUE', conteudo: 'Gente, não estou conseguindo entender os componentes do Vue, alguem pode me ajudar com isso??', autor: 'hvm', data: '08/04/2009'}, {
    id: 3, titulo:'Aulas de atuação', conteudo: 'Alguem sabe alguma aula de atuação boa ou um prof bom??', autor: 'stvgran', data: '24/06/2009'}, {
    id: 4, titulo:'Café', conteudo: 'Onde vende café? meu fornecedor do hospital não faz mais isso', autor: 'coffbarneynotkillanyone', data: '06/07/2009'},     {id: 5, titulo:'Biollgia e Zoologia', conteudo: 'Algm bom de biologia. Estou com dificuldades sobre genetica  estatistica', autor: 'sontoffolizorrone', data: '11/07/2009'}

]);

 let usuario = ref('H')

const postagensTituloNovo = ref('');
const postagensConteudoNovo = ref('');
const mostrarComent = ref(false);
const usuLogado = ref('cofeeBarney')


function adicionar() {
if (!postagensConteudoNovo.value.trim() || !postagensTituloNovo.value.trim()) {
    alert(`Preencha os campos!!`);
} else {
    let maiorId =  Math.max(...postagens.value.map(item => item.id))
    const novoPost = {
        titulo: postagensTituloNovo.value,
     conteudo: postagensConteudoNovo.value,
        autor: usuLogado.value,
        data:  Date(Date.now()).toLocaleString('pt-BR'),
        id: maiorId + 1
    }
    postagens.value.unshift(novoPost)
    postagensConteudoNovo.value = '';
    postagensTituloNovo.value = '';
}
}

function excluir(idItem) {
   postagens.value = postagens.value.filter(post => post.id !== idItem)
}
function editar(post) {
    const index = postagens.value.findIndex(p => p.id === post.id)

    if (index !== -1) {
        const edicao = prompt(`Edite o seu post...`, post.conetudo)

        if (edicao !== null) {
     postagens.value[index].conteudo = edicao}}}


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
                <p>
                    {{ post.conteudo }}
                </p>
                   <p>
                    <small><strong>
                        {{ post.autor }}
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
<button @click="mostrarComent = true" v-show="!mostrarComent">Ver Comentários</button>
<div v-if="mostrarComent">
    <CommentsPostagens :post='post' :usuario='usuario'></CommentsPostagens>
    <button @click="mostrarComent = false">Fechar Comentários</button>
</div>
    </div>
        </div>

    </div>

     <div class="postar">

        <h2>Criar post</h2>

        <input type="text" v-model="postagensTituloNovo" placeholder="Titulo"> 
        <textarea v-model="postagensConteudoNovo" placeholder="estou com dificuldade em..."></textarea>
        <button @click="adicionar">
         Postar
        </button>
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

</style>