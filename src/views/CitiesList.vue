<script setup>
import City from "../components/City.vue";

const data = {
  cities: [
    {
      id: 1,
      name: 'Ville 1',
      weather: 'Ensoleillé',
      temperature: 22.0,
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Ville 2',
      weather: 'Peu nuageux',
      temperature: 19.5,
      updatedAt: new Date()
    }
  ]
};
</script>

<template>
  	<h1>Liste ville Météo</h1>

  	<RouterLink to="/ville">ville</RouterLink>

	<City v-for="city in data.cities" v-bind="city" />
	
</template>


<style scoped></style>
