<script setup>

import { ref } from 'vue';

defineEmits([comentar, excluir, editar]);
defineProps({id, texto, usu, data, usuario})


let comentarios = ref([{
    id: 1, texto: "Não entendi, alguem me explica?", usu: "@NeymarJr"
}
]
);

const usuarioLogado = ref('H')
const novoComentario = ref('');

function comentar() {

if (!novoComentario.value.trim()) {
    alert(`Preencha os campos!!`);
} else {
    let maiorId =  Math.max(...comentarios.value.map(item => item.id))

    const novoComentario = {
     conteudo: postagensConteudoNovo.value,
        usu: usuario.value
        data:  Date(Date.now()).toLocaleString('pt-BR'),
        id: maiorId + 1
    }

    comentarios.value.unshift(novoComentario)

    novoComentario.value = '';
}
}

function excluir(idItem) {
   comentários.value = comentarios.value.filter(c => c.id !== idItem)
}

function editar(comentario) {
    const index = comentários.value.findIndex(c => c.id === comentario.id)

    if (index !== -1) {

        const edicao = prompt(`Edite o seu comentario...`, comentario.conetudo)

        if (edicao !== null) {
                comentarios.value[index].conteudo = edicao
        }
    
    }
}

</script>
<template>

<section>
    <div class="comentarios">
        <div class="comentar">
            <textarea placeholder="O que está oensando?" v-model="texto" @click="comentar"></textarea> <button type="submit">Comentar</button>
        </div>
        <div class="todos" v-for="comentario in comentarios" :key="comentario.id">

            <h2>{{ comentario.usu }}</h2>
            <p> {{ comentario.texto }}</p>

            <div class="seu" v-if="comentario.usu === usuarioLogado">
                <button @click="editar">Editar</button>
                <button @click="excluir">Excluir</button>
            </div>



        </div>
    </div>
</section>

</template>

<style scoped>

</style>