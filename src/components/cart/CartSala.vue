<script setup>
 defineProps(["idSala", "nome", "participantes", "desc", "usuarioCriador", "status"])
</script>
<template>
    <div class="lasa">
        <h2>{{ nome }}</h2>
        <p>{{ desc }}</p>
    </div>
</template>

<style>
.lasa{
    background-color: rgb(35, 142, 236);
    margin: 2vw;
}
</style>