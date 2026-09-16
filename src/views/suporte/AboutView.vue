<script setup>
</script>

<template>
  <section class="pagina">
    <div class="about">
      <div class="about-texto">
        <h1>O que é o KUAA?</h1>
        <p class="oq">
          O KUAA é uma rede social focada 100% nos estudos e no desenvolvimento pessoal de todos os nossos estudantes, professores e universitários! A palavra “KUAA” significa “conhecimento” em tupi-guarani, escolhemos este nome pois acreditamos que o conhecimento é a chave para um futuro próspero, em conjunto com todos os estudantes que se esforçam dia e noite para transformar o mundo em um lugar melhor!

        </p>
      </div>
      <div class="about-img">
        <img src="/kuaa.png" alt="Logo" />
      </div>
    </div>

    <div class="carrossel">
      <button class="seta seta-esquerda" @click="prev"><font-awesome-icon icon="chevron-left"/></button>

      <v-window v-model="slide" class="janela">
        <v-window-item>
          <div class="card">
            <div class="estudante-card">
              <img src="" alt="" />
              <h2>Maysa Bagnhuk Machado</h2>
              <ul>
                <li>Product Owner</li>
                <li>Estilização do CSS e desenvolvimento da Timeline</li>
                <li>Banco de dados e levantamento de requisitos</li>
                <li>Prototipação no figma</li>
              </ul>
            </div>
          </div>
        </v-window-item>

        <v-window-item>
          <div class="card">
            <div class="estudante-card">
              <img src="" alt="" />
              <h2>André Kosmala</h2>
              <ul>
                <li>Scrum Master</li>
                <li>Desenvolvimento do Login</li>
                <li>Banco de dados e levantamento de requisitos</li>
              </ul>
            </div>
          </div>
        </v-window-item>

        <v-window-item>
          <div class="card">
            <div class="estudante-card">
              <img src="" alt="" />
              <h2>Clara Kellermann</h2>
              <ul>
                <li>Desenvolvimento de salas</li>
                <li>Banco de dados e levantamento de requisitos</li>
                <li>Prototipação no figma</li>
              </ul>
            </div>
          </div>
        </v-window-item>

        <v-window-item>
          <div class="card">
            <div class="estudante-card">
              <img src="" alt="" />
              <h2>Hallana Moura</h2>
              <ul>
                <li>Desenvolvimento de postagens</li>
                <li>Banco de dados e levantamento de requisitos</li>
                <li>Prototipação no figma e design gráfico</li>
              </ul>
            </div>
          </div>
        </v-window-item>

        <v-window-item>
          <div class="card">
            <div class="estudante-card">
              <img src="" alt="" />
              <h2>Pietro Fonseca</h2>
              <ul>
                <li>Desenvolvimento de usuários e busca</li>
                <li>Banco de dados e levantamento de requisitos</li>
                <li>Prototipação no figma</li>
              </ul>
            </div>
          </div>
        </v-window-item>

        <v-window-item>
          <div class="card">
            <div class="estudante-card">
              <img src="" alt="" />
              <h2>Samuel Gadotti</h2>
              <ul>
                <li>Desenvolvimento de explorar salas</li>
                <li>Banco de dados e levantamento de requisitos</li>
                <li>Prototipação no figma</li>
              </ul>
            </div>
          </div>
        </v-window-item>
      </v-window>

      <button class="seta seta-direita" @click="next"><font-awesome-icon icon="chevron-right"/></button>
    </div>
  </section>
</template>

<style scoped>
.pagina {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: block;
  max-width: 1200px
}

h1,
h2 {
  font-family: 'Prompt', sans-serif;
  font-weight: bold;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #d9d9d9;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.about {
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
}

.about img {
  width: 20vw;
  max-width: 320px;
}

.about-texto {
  max-width: 480px;
  flex-shrink: 0;
}

p.oq {
  text-align: center;
  font-size: 1.2rem;
  width: 100%;
  color: #d9d9d9;
}

.carrossel {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.janela {
  width: 100%;
  height: 380px;
}

.card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.estudante-card {
  background: #F8D76B;
  color: #1e1e1e;
  padding: 30px;
  border-radius: 15px;
  width: 450px;
  max-width: 85%;
  height: 100%;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-y: auto;
}

.estudante-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.estudante-card ul li {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.seta {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: #313131;
  color: #d9d9d9;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.2rem;
  cursor: pointer;
}

.seta:hover {
  transform: translateY(-50%) scale(0.9);
  transition: 0.3s;
  background-color: #313131af;
}

.seta-esquerda {
  left: 10px;
}

.seta-direita {
  right: 10px;
}

@media (max-width: 768px) {
.about{
  display: flex;
  flex-direction: column;
}

h1{
  font-size: 1.6rem;
}

h2{
  font-size: 1.4rem;
}

p.oq{
  width: 100%;
  font-size: 1.1rem;
}

.about-img{
  width: 100% !important;
  display: flex;
  justify-content: center;
}

img{
  width: 80% !important;
}

.estudante-card{
  padding: 15px;
  max-width: 75%;
}

  .janela {
    height: 340px;
  }

  .card {
    height: auto;
    padding: 20px 0;
  }

  .estudante-card {
    padding: 15px;
    max-width: 75%;
    max-height: 300px;
  }
}

@media (min-width: 1440px) {
  .estudante-card {
    width: 550px;
  }

  .janela {
    height: 420px;
  }

  p.oq {
    max-width: 700px;
  }
}
</style>
