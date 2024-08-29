<script setup>
import City from "../components/City.vue";

let data = {
  name: "Ma ville", // nom de la ville
  weather: "Peu nuageux", // descriptif météo
  temperature: 20.55, // température en °C
  updatedAt: new Date(), // date de dernière mise à jour
};
</script>

<template>
  <h1>Liste ville Météo</h1>
  <RouterLink to="/ville">ville</RouterLink>
  <City v-bind="data" />
</template>

<style scoped></style>
