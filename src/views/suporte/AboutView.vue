<script setup>
import { ref } from 'vue'

const slide = ref(0)
const total = 6

function prev() {
  slide.value = (slide.value - 1 + total) % total
}
function next() {
  slide.value = (slide.value + 1) % total
}
</script>

<template>
  <section class="pagina">
    <div class="about">
      <div class="about-texto">
        <h1>O que é o KUAA?</h1>
        <p class="oq">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae molestias dignissimos
          quia maxime, odio in itaque placeat sunt voluptates perspiciatis nostrum nobis, vel
          provident qui odit alias illo quo ullam?
        </p>
      </div>
      <div class="about-img">
        <img src="/logo-kuaa-2.png" alt="Logo" />
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
                <li>Desenvolvimento HTML, CSS e JavaScript</li>
                <li>Levantamento de requisitos</li>
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
                <li>Desenvolvimento JavaScript</li>
                <li>Banco de dados</li>
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
                <li>Desenvolvimento JavaScript</li>
                <li>Banco de dados</li>
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
                <li>Desenvolvimento HTML, CSS e JavaScript</li>
                <li>Levantamento de requisitos</li>
                <li>Design gráfico</li>
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
                <li>Desenvolvimento JavaScript</li>
                <li>Banco de dados</li>
                <li>Design gráfico</li>
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
                <li>Desenvolvimento JavaScript</li>
                <li>Banco de dados</li>
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
}

h1,
h2 {
  font-family: 'Prompt', sans-serif;
  font-weight: bold;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #1e1e1e;
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
  gap: 60px;
  width: 100%;
}

.about img {
  width: 20vw;
  max-width: 250px;
}

p.oq {
  text-align: center;
  font-size: 1.2rem;
  width: 30vw;
  color: #1e1e1e;
  font-weight: bold;
}

.carrossel {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
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
  background: #1e1e1e;
  color: #d9d9d9;
  padding: 30px;
  border-radius: 15px;
  width: 450px;
  max-width: 85%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
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
  z-index: 2;
  background: #1e1e1e;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.2rem;
  cursor: pointer;
}

.seta:hover{
transform: scale(0.9);
transition: 0.3s;
background-color: #1e1e1eaf;
}

.seta-esquerda {
  left: 10px;
}

.seta-direita {
  right: 10px;
}
</style>
