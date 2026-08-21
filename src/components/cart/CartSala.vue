<script setup>
defineProps(['idSala', 'nome', 'participantes', 'desc', 'usuarioCriador', 'status', 'banner'])
</script>
<template>
  <div class="lasa">
    <div class="aa">
      <div class="aqFt">
         <img :src="banner" :alt="nome">

        <!-- só pra representar a foto que ainda não tá pronta -->
        
      </div>
      <h2>{{ nome }}</h2>
    </div>
    <p>{{ desc }}</p>
    <slot/>
  </div>
  
</template>

<style>
p {
  margin: 25px;
}
.aa {
  display: flex;
  gap: 3vw;
  align-items: center;
}
.lasa {
  background-color: rgb(35, 142, 236);
  height: 15vw;
}
.aqFt {
  margin: 10px 0 0 30px;
  background-color: rgb(255, 255, 255);
  width: 6vw;
  height: 4vw;
}
</style>
