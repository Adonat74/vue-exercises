<script setup>
 
 defineProps({
    name: String, // nom de la ville
    weather: String, // descriptif météo 
    temperature: Number, // température en °C
    updatedAt: Date // date de dernière mise à jour
})

</script>

<template>
  <h1>{{name}}</h1>
  <p>Temps : {{ weather }}</p>
  <p>Température : {{ temperature }} C°</p>
  <p>mise à jour : {{ updatedAt.toLocaleString() }}</p>
</template>

<style scoped>

</style>
