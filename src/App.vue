<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from './components/layout/AppSidebar.vue';
</script>

<template>
<div class="app">
<AppHeader/>

<div class="layout">
<AppSidebar/>

   <main>
    <RouterView />
  </main>
</div>
</div>

</template>

<style scoped>
.app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.layout{
  display: flex;
  flex: 1;
}

main{
  flex-grow: 1;
  padding: 20px;
  margin-top: 60px;  
  margin-left: 240px;
  background: #1E1E1E;
  min-height: 90vh;
  width: 100%;

}
</style>
