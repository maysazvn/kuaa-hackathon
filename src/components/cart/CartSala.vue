<script setup>
defineProps(['idSala', 'nome', 'participantes', 'desc', 'usuarioCriador', 'status', 'banner'])
</script>
<template>
  <div class="cardSala">
      <div class="info">
        <div class="foto">
          <img :alt="nome" :src="banner" class="imgSala">
          <h2 class="sala">{{ nome }}</h2>

          <!-- só pra representar a foto que ainda não tá pronta -->
        </div>
      </div>
      <p class="desc">{{ desc }}</p>
    <slot />
  </div>
</template>

<style>
.cardSala {
  border-radius: 20px;
  background-color: #313131;
  padding: 10px;
}

img.imgSala{
  width: 120px;
  border-radius: 20px;
}

h2.sala,
p.desc {
  color: #d9d9d9;
  padding: 5px;
}

h2.sala {
  font-size: 2rem;
  font-weight: bold;
}

p.desc{
  max-width: 20vw;
  overflow-wrap: break-word;
  font-size: 1.2rem;
  margin: auto;
}

</style>
