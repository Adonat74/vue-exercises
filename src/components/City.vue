<script setup>
  import { format } from 'timeago.js';
 
  defineProps(['city'])

</script>

<template>
  <h2>{{ city.name }}</h2>
  <p>Temps : {{ city.weather[0].description }}</p>
  <p>Température : {{ city.main.temp }} C°</p>
  <p>mise à jour : {{ format(city.dt * 1000) }}</p>

</template>

<style scoped>

</style>
