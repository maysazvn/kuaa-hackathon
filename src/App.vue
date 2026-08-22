<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from './components/layout/AppSidebar.vue';
</script>

<template>
  <AppHeader />
  <AppSidebar/>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
