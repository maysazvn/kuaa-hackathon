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
  background-color: #2a2a2a;
  padding: 15px;
}

img.imgSala{
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 12px;
  margin: 10px auto;
  display: block;
}

h2.sala,
p.desc {
  color: #d9d9d9;
  padding: 5px;
}

h2.sala {
  font-size: 1.5rem;
  font-weight: bold;
}

p.desc{
  font-size: 0.90rem;
  color: #9f9f9f;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.7em;
  line-height: 1.3em;
  margin: 10px 0;
  word-break: break-word;
}

</style>
