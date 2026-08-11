<script setup>
import { ref } from 'vue'
const emit = defineEmits(['fechar', 'adicionar'])
import { postagens } from '@/data/postagens.js';
 import { shallowRef } from 'vue'


 const dialog = shallowRef(false)
const postagensTituloNovo = ref('');
const postagensConteudoNovo = ref('');
const usuLogado = ref('cofeeBarney');




function adicionar() {
  if (!postagensTituloNovo.value.trim() || !postagensConteudoNovo.value.trim()) {
    alert(`Preencha os campos!`);
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
     postagensTituloNovo.value =''
 postagensConteudoNovo.value = '';
 console.log("fechei")
  emit('fechar') }
   
}


</script>
<template>
    <section class="sessaoPostar">

        <v-card prepend-icon="mdi-account" title="Postar" class="caixa">
        <v-card-text>
          <v-row density="comfortable">
            <v-col cols="12" md="12">
              <v-text-field label="Título" required v-model="postagensTituloNovo"  class="formulario"></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-text-field
                hint="Compartilhe suas ideias"
                label="O que está pensando agora?..."
                v-model="postagensConteudoNovo"
                class="formulario"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-autocomplete
                :items="['2info2', 'Quimica do Mal', 'Biologia']"
                label="Sala"
                auto-select-first
                multiple
               class="formulario"

              ></v-autocomplete>
            </v-col>
          </v-row>

          <small class="text-body-small text-medium-emphasis">
            *indica campo obrigatório
          </small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" @click="adicionar">Postar</v-btn>
           <v-btn
            text="Close"
            variant="plain"
            @click="$emit('fechar')"
          ></v-btn>
</v-card-actions>
  </v-card>
    
         
    </section>
 
</template>
<style>

.caixa  {
  padding: 50px;
  border-radius: 7px;
}

title {
  border-bottom: 20px;
}

label {
  padding: 20px;
}
</style>