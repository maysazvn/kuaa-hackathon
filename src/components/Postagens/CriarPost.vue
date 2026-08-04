<script setup>
import { ref } from 'vue'
const emit = defineEmits(['postar', 'fechar'])

const titulo = ref('')
const conteudo = ref('')

function postar () {
    
    if (!titulo.value.trim() || !conteudo.value.trim()) {
    alert(`Preencha os campos!!`);
} else {
    emit('postar', {
        titulo: titulo.value,
        conteudo: conteudo.value
    }) 
    
    titulo.value = ''
    conteudo.value = ''

}
   
}

</script>
<template>
    <section>

         <div class="postar">

        <h2>Criar post</h2>

        <input type="text" v-model="postagensTituloNovo" placeholder="Titulo"> 
        <textarea v-model="postagensConteudoNovo" placeholder="estou com dificuldade em..."></textarea>

        <button @click="postar">
         Postar
        </button>
        <button @click="$emit('fechar')">Cancelar</button>
    </div>
    </section>
 
</template>
<style>
</style>