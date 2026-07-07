<script setup>
</script>

<template>
  <div class="about">
    <div>
     <h1>O que é o KUAA?</h1>
    <p>blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
    </div>
    <div>
      <img src="../../../public/logo-kuaa-2.png" alt="">
    </div>
  </div>

  <div class="estudantes">
    <div>
    <div class="estudante-card">
      <img src="" alt="">
      <h2>Maysa B. Machado</h2>
      <ul>
        <li>Product Owner</li>
        <li>Desenvolvimento HTML, CSS e JavaScript</li>
        <li>Levantamento de requisitos</li>
      </ul>
    </div>

    <div class="estudante-card">
      <img src="" alt="">
      <h2>André Kosmala</h2>
      <ul>
        <li>Scrum Master</li>
        <li>Desenvolvimento JavaScript</li>
        <li>Banco de dados</li>
      </ul>
    </div>

    <div class="estudante-card">
      <img src="" alt="">
      <h2>Clara Kellermann</h2>
      <ul>
        <li>Desenvolvimento JavaScript</li>
        <li>Banco de dados</li>
      </ul>
    </div>
    </div>

    <div>
    <div class="estudante-card">
      <img src="" alt="">
      <h2>Hallana Moura</h2>
      <ul>
        <li>Desenvolvimento HTML, CSS e JavaScript</li>
        <li>Levantamento de requisitos</li>
      </ul>
    </div>

    <div class="estudante-card">
      <img src="" alt="">
      <h2>Pietro Fonseca</h2>
      <ul>
        <li>Desenvolvimento JavaScript</li>
        <li>Banco de dados</li>
      </ul>
    </div>

    <div class="estudante-card">
      <img src="" alt="">
      <h2>Samuel Gadotti</h2>
      <ul>
        <li>Desenvolvimento JavaScript</li>
        <li>Banco de dados</li>
      </ul>
    </div>
    </div>
  </div>
</template>

<style scoped>
h1, h2{
  font-family: "Prompt", sans-serif;
  font-weight: bold;
  text-align: center;
}

h1{
  font-size: 2rem;
  text-align: center;
}

.about{
  margin: 0 auto;
  display: flex;
}

.estudantes{
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.estudante-card{
  background: #1E1E1E;
  color: #d9d9d9;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  height: 25vw;
}

.estudante-card ul li{
  text-align: center;
}

p{
  text-align: center;
}

</style>
