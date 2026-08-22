<script setup>
//imports

import { ref } from 'vue';
import ButtonChild from '@/components/ButtonChild.vue';
import { userReal } from './login/UserReal';
import { emailReal } from './login/EmailReal';
import { senhaReal } from './login/SenhaReal';
import { loginOut } from './login/Loginout';

// lets ////////

let cadastro = ref(true)
let login = ref(false)
let emailFalso = ref('')
let userFalso = ref('')
let senhaFalsa = ref('')

// Functions /////

function selecionarLogin() {
  if (cadastro.value == true) {
    cadastro.value = false
    login.value = true
  }
}
function selecionarCadastro() {
  if (login.value == true) {
    login.value = false
    cadastro.value = true
  }
}

function enviar(email, senha, user) {
  if (email.trim() !== '' && senha.trim() !== '' && user.trim() !== '') {
    if (senhaReal.value.length == 0 && emailReal.value.length == 0 && userReal.value.length == 0) {
      emailReal.value = email
      userReal.value = user
      senhaReal.value = senha

      emailFalso.value = ''
      senhaFalsa.value = ''
      userFalso.value = ''
    } else {
      alert('Você já possui cadastro! Faça login!')
    }
  } else {
    alert('Preencha todos os campos!')
  }
}
function logar(email, senha){
  if(email === emailReal.value && senha === senhaReal.value){
    loginOut.value = 'ativo'
    alert('Você logou com sucesso!')
    senhaFalsa.value = ''
    emailFalso.value = ''
  } else {
    alert('Erro! Senha ou/e usuário inválido!')
  }
}
</script>

<template>
  <div class="container">
    <!-- essa ^ div é a geral que contem TUDO -->
    <div class="bemVindo">
      <!-- essa ^ tem o texto de bem vindo e a imagem do kuaa -->
      <img src="../../../public/kuaa.png" alt="Kuaa Logo" />
      <p v-if="cadastro == true">
        <span>Bem-vindo ao KUAA</span>
        O KUAA veio para ajudar você, estudante, a ter um desempenho melhor em seus estudos, provas e
        até mesmo fazer amigos novos!
      </p>
      <p v-if="login == true">
        <span>Bem-vindo de volta ao KUAA</span>
        O KUAA veio para ajudar você, estudante, a ter um desempenho melhor em seus estudos, provas e
        até mesmo fazer amigos novos!
      </p>
    </div>
    <div class="direita">
    <div class="escolha">
      <!-- essa ^ tem os botoes para alterar o login e cadastro -->
      <ButtonChild @clique="selecionarCadastro()" :class="{ inativo: !cadastro }" class="botaoCadastro">Cadastro</ButtonChild>
      <ButtonChild @clique="selecionarLogin()" :class="{ inativo: !login }" class="botaoLogin">Login</ButtonChild>
    </div>

    <div class="cadastro" v-show="cadastro == true">
      <!-- essa ^ é a div que aparece quando você esta fazendo cadastro -->
      <label for="email"></label>
      <input type="email" name="email" placeholder="E-mail" required v-model="emailFalso" />
      <input type="text" required v-model="userFalso" placeholder="Nome de usuário" />
      <input type="password" required v-model="senhaFalsa" placeholder="Senha" />
      <ButtonChild @clique="enviar(emailFalso, senhaFalsa, userFalso)" class="botaoLog">Cadastrar</ButtonChild>
    </div>
    <div class="login" v-show="login == true">
      <!-- essa é a div ^ que aparece para fazer login -->
      <input type="email" name="email" placeholder="E-mail" required v-model="emailFalso" />
      <input type="password" required v-model="senhaFalsa" placeholder="Senha" />
      <ButtonChild @clique="logar(emailFalso, senhaFalsa)" class="botaoLog"> Logar </ButtonChild>
    </div>
  </div>
   </div>
</template>

<style scoped>
div.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-top: 40px;
  gap: 150px;
}

.bemVindo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.bemVindo img {
  max-width: 380px;
  height: auto;
}

.bemVindo p {
  color: #c0c0c0;
  font-size: 1.2rem;
  line-height: 1.5;
  max-width: 380px;
}

.bemVindo p span {
  display: block;
  font-weight: bold;
  font-size: 1.5rem;
}

.direita{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.escolha {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
  justify-content: center;
}

.escolha .botaoCadastro,
.escolha .botaoLogin{
font-family: 'Prompt', sans-serif;
font-weight: bold;
font-size: 2.5rem;
color: #F8D76B;
transition: .5s;
}

.escolha .inativo{
  color: #f8d76b7e;
}

.escolha .inativo:hover {
  transform: scale(0.95);
}

.cadastro,
.login {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 20vw;
}

input {
  background-color: #2a2a2a;
  border: 1px solid #e0d8c3;
  border-radius: 10px;
  padding: 12px 20px;
  color: #e0d8c3;
  font-size: 1rem;
  outline: none;
}

.botaoLog{
  background-color: #F8D76B;
  color: #1e1e1e;
  font-weight: bold;
  font-size: 1rem;
  padding: 12px 20px;
  border-radius: 25px;
}

.botaoLog:hover{
  transition: .2s;
  background-color: #f8d76ba4;
  transform: scale(0.98);
}
</style>
