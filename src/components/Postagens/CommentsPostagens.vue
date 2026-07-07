<script setup>

import { ref } from 'vue';

defineEmits(['id', 'texto', 'usu','comentar', 'usuarioLogado'])

let comentarios = ref([{
    id: 1, texto: "Não entendi, alguem me explica?", usu: "NeymarJr"
}
]
);

const usuarioLogado = ref('H')
const novoComent = ref('');

function comentar() {

if (!novoComent.value.trim()) {
    alert(`Preencha os campos!!`);
} else {
    let maiorId =  Math.max(...comentarios.value.map(item => item.id));

    const novoNoComentario = {
     texto: novoComent.value,
        usu: usuarioLogado.value,
        data:  Date(Date.now()).toLocaleString('pt-BR'),
        id: maiorId + 1
    }

    comentarios.value.unshift(novoNoComentario)

    novoComent.value = '';
}
}

function excluir(idItem) {
   comentarios.value = comentarios.value.filter(c => c.id !== idItem)
}

function editar(comentario) {
    const index = comentarios.value.findIndex(c => c.id === comentario.id)

    if (index !== -1) {

        const edicao = prompt(`Edite o seu comentario...`, comentario.texto)

        if (edicao !== null) {
                comentarios.value[index].texto = edicao
        }
    
    }
}

</script>
<template>

<section>
    <div class="comentarios">
        <div class="comentar">
            <textarea placeholder="O que está pensando?" v-bind="texto" v-model="novoComent"></textarea> 
        </div>             <button type="submit" @click="comentar()">Comentar</button>

        <div class="todos" v-for="comentario in comentarios" :key="comentario.id">

            <h2>@{{ comentario.usu }}</h2>
            <p> {{ comentario.texto }}</p>

            <div class="seu" v-if="comentario.usu === usuarioLogado">
                <button @click="editar(comentario)">Editar</button>
                <button @click="excluir(comentario.id)">Excluir</button>
            </div>



        </div>
    </div>
</section>

</template>

<style scoped>
button {
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
}

textarea {
    border: 1px solid black;
    margin-top: 25px;
    
}

h2{
    font-style: italic;
}

div.todos {
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>