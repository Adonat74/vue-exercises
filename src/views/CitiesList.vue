<script setup>
import { ref, onMounted } from "vue";
import City from "../components/City.vue";
import axios from "axios";

let data = ref([]);

async function getUser() {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/find?lat=45.758&lon=4.765&cnt=20&cluster=yes&lang=fr&units=metric&APPID=683c9161b07304af09f463da98aaa2e6');
    data.value = response.data.list;
  } catch (error) {
    console.error(error);
  }
}

onMounted(async () => {
  await getUser();
  console.log(data.value);
});


</script>

<template>
  	<h1>Liste ville Météo</h1>

  	<!--<RouterLink to="/ville">ville</RouterLink>-->
    <ul>
      <li v-for="city in data" :key="city.id">
        <City :city="city" />
      </li>
    </ul>
	
	
</template>


<style scoped>
</style>
