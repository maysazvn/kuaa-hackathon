<script setup>

//imports

import { ref } from 'vue';
import ButtonChild from '@/components/ButtonChild.vue';
import { userReal } from './login/UserReal';
import { emailReal } from './login/EmailReal';
import { senhaReal } from './login/SenhaReal';
import { loginOut } from './login/Loginout';

// lets ////////

let cadastro = ref(true);
let login = ref(false);
let emailFalso = ref('');
let userFalso = ref('');
let senhaFalsa = ref('');


// Functions /////

function selecionarLogin(){
if(cadastro.value == true){
  cadastro.value = false
  login.value = true
}
}
function selecionarCadastro(){
  if(login.value == true){
  login.value = false
  cadastro.value = true
}
}

function enviar(email, senha, user){
  if(email.trim() !== '' && senha.trim() !== '' && user.trim() !== ''){
 if(senhaReal.value.length == 0 && emailReal.value.length == 0 && userReal.value.length == 0){
  emailReal.value = email
userReal.value = user
senhaReal.value = senha

emailFalso.value = ''
senhaFalsa.value = ''
userFalso.value = '';
 }else{
  alert('Você já possui cadastro! Faça login!');
 }

}else{
  alert('Preencha todos os campos!');
}
}
function logar(email, senha){
  if(email === emailReal.value && senha === senhaReal.value){
    loginOut.value = 'ativo'
    alert('Você logou com sucesso!')
    senhaFalsa.value = '';
    emailFalso.value = '';
  }else{
    alert('Erro! Senha ou/e usuário inválido!')
  }
}


</script>

<template>
  <div class="container">
    <!-- essa ^ div é a geral que contem TUDO -->
    <div class="bemVindo">
      <!-- essa ^ tem o texto de bem vindo e a imagem do kuaa -->
      <img src="../../../public/kuaa.png" alt="Kuaa Logo">
      <p v-if="cadastro == true">
        <span>Bem vindo ao Kuaa!</span>
O Kuaa veio para ajudar você estudante a ter um desempenho melhor em seus estudos, provas e até mesmo fazer amigos novos!
Faça seu cadastro hoje mesmo!
      </p>
      <p v-if="login == true">
        Bem vindo de volta ao Kuaa!
O Kuaa veio para ajudar você estudante a ter um desempenho melhor em seus estudos, provas e até mesmo fazer amigos novos!
Faça seu login e encontre seus colegas novamente!
      </p>
    </div>
    <div class="escolha">
      <!-- essa ^ tem os botoes para alterar o login e cadastro -->
      <ButtonChild @clique="selecionarCadastro()">Cadastro</ButtonChild>
      <ButtonChild @clique="selecionarLogin()">Login</ButtonChild>
    </div>

    <div class="cadastro" v-show="cadastro == true">
      <!-- essa ^ é a div que aparece quando você esta fazendo cadastro -->
      <label for="email"></label>
      <input type="email" name="email" placeholder="E-mail" required v-model="emailFalso">
      <input type="text" required v-model="userFalso" placeholder="Nome de usuário">
      <input type="password" required v-model="senhaFalsa" placeholder="Senha">
      <ButtonChild @clique="enviar(emailFalso, senhaFalsa, userFalso)">Cadastrar</ButtonChild>
    </div>
    <div class="login" v-show="login == true">
      <!-- essa é a div ^ que aparece para fazer login -->
      <input type="email" name="email" placeholder="E-mail" required v-model="emailFalso">
     <input type="password" required v-model="senhaFalsa" placeholder="Senha">
     <ButtonChild @clique="logar(emailFalso, senhaFalsa)">
      Logar
     </ButtonChild>
    </div>
  </div>
</template>

<style scoped>
div.container{
  display: flex;
  justify-content: space-between;
}
input{
  color: white;
  background-color: black;
  border: 2px solid red;
}
</style>
