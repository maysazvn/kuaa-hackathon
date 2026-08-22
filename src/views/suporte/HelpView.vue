<script setup>
</script>

<template>
    <h1>Ajuda</h1>
    <div class="p">
          <details>
            <summary>
              <font-awesome-icon icon="angles-right" class="seta" /> Como denuncio um comportamento inadequado?
            </summary>

            <p>
            Cada post há três pontos ao seu lado. Ao clicar no botão, deve aparecer a opção "Denunciar", escreva sua denúncia e nossa equipe irá analisar em até 2 dias úteis.
          </p>
          </details>
    </div>

    <div class="p">
          <details>
            <summary>
              <font-awesome-icon icon="angles-right" class="seta" /> Por que não consigo criar uma sala de estudo?
            </summary>

            <p>
            Por motivos de segurança, sua conta precisa ter pelo menos 15 dias para que você possa ser dono de uma sala.
          </p>
          </details>
    </div>

    <div class="p">
          <details>
            <summary>
              <font-awesome-icon icon="angles-right" class="seta" /> Por que a busca não retorna resultados para termos que eu sei que existem?
            </summary>

            <p>
            A busca funciona melhor com palavras-chave específicas. Verifique se você não está com algum filtro ativado na barra de busca. Se for um post muito recente, pode levar alguns segundos para ser indexado pelo sistema.
          </p>
          </details>
    </div>

    <h2>Continua com problemas? Contate o KUAA</h2>
    <div class="contato">
    <p>Telefone: 0800 570 0011</p>
    <p>E-mail: kuaacontact@kuaamail.com</p>
</div>

</template>

<style scoped>

h1, h2{
  font-family: "Prompt", sans-serif;
  font-weight: bold;
  color: #d9d9d9;
  text-align: center;
}

h1{
  font-size: 2.5rem;
}

h2{
  font-size: 2rem;
}

div.p{
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1vw auto;
  background: #313131;
  padding: 15px;
  border-radius: 15px;
  color: #D9D9D9;
  width: 50%;
  box-shadow: 0px 0px 10px #0000005d;
}

summary{
  font-weight: 600;
  list-style: none;
  font-size: 1.5rem;
}

div.p p{
  color: #d9d9d9d9;
  margin: 5px;
  text-align: left;
  font-size: 1.2rem;
}

.seta{
  margin: 2px;
  transition: .5s;
}

details[open] summary .seta{
  transform: rotate(90deg);
}

div.contato{
  margin: 1vw;
}

div.contato p {
color: #d9d9d9;
text-align: center;
margin: 15px auto;
border: 3px solid #d9d9d9;
border-radius: 15px;
font-weight: bold;
width: fit-content;
padding: 5px 15px;
font-size: 1.2rem;
}
</style>
