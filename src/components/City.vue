<script setup>
 
let data = {
    name: 'Ma ville', // nom de la ville
    weather: 'Peu nuageux', // descriptif météo 
    temperature: 20.55, // température en °C
    updatedAt: new Date() // date de dernière mise à jour
}

</script>

<template>
  <h1>{{data.name}}</h1>
  <p>Temps : {{ data.weather }}</p>
  <p>Température : {{ data.temperature }} C°</p>
  <p>mise à jour : {{ data.updatedAt.toLocaleString() }}</p>
</template>

<style scoped>

</style>
