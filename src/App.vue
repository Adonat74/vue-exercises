<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import CitiesList from './views/CitiesList.vue';


  function onListClick() {
    alert('link clicked');
  }

</script>

<template>
  <a @click="onListClick">la météo -></a>
  <CitiesList />
  <HelloWorld msg="Vite + Vue" />
  
</template>

<style scoped>

</style>
