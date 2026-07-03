<script setup>
import { ref } from 'vue';
import ButtonChild from '@/components/ButtonChild.vue';
import { dadosLogin } from './login/dadosLogin';
// lets ////////

let cadastro = ref(true);
let login = ref(false);
let emailFalso = ref('');
let userFalso = ref('');
let senhaFalsa = ref('');
let senhaReal = ref('');
let emailReal = ref('');
let userReal = ref('');

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
dadosLogin.value.push(email)
dadosLogin.value.push(senha)
dadosLogin.value.push(user)

emailReal.value = email
userReal.value = user
senhaReal.value = senha

emailFalso.value = ''
senhaFalsa.value = ''
userFalso.value = '';
}else{
  alert('Preencha todos os campos!');
}
}
function logar(email, senha){
  if(email === emailReal.value && senha === senhaReal.value){
    alert('Você logou com sucesso!')
  }else{
    alert('Vai tomar no cu')
  }
}


</script>

<template>
  <div class="container">
    <div class="bemVindo">
      <img src="../../../public/kuaa.png" alt="Kuaa Logo">
      <p>
        <span>Bem vindo ao Kuaa!</span> 
O Kuaa veio para ajudar você estudante a ter um desempenho melhor em seus estudos, provas e até mesmo fazer amigos novos!
Faça seu cadastro hoje mesmo!
      </p>
    </div>
    <div class="escolha">
      <ButtonChild @clique="selecionarCadastro()">Cadastro</ButtonChild>
      <ButtonChild @clique="selecionarLogin()">Login</ButtonChild>
    </div>

    <div class="cadastro" v-show="cadastro == true">
      <label for="email"></label>
      <input type="email" name="email" placeholder="E-mail" required v-model="emailFalso">
      <input type="text" required v-model="userFalso" placeholder="Nome de usuário">
      <input type="text" required v-model="senhaFalsa" placeholder="Senha">
      <ButtonChild @clique="enviar(emailFalso, senhaFalsa, userFalso)">Cadastrar</ButtonChild>
    </div>
    <div class="login" v-show="login == true">
      <input type="email" name="email" placeholder="E-mail" required v-model="emailFalso">
     <input type="text" required v-model="senhaFalsa" placeholder="Senha">
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
