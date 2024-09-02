<script setup>
import "leaflet/dist/leaflet.css"
import { ref, onMounted } from "vue";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet"
import axios from "axios";
import { format } from 'timeago.js';


// import arcades from "./arcades.json"

let zoom = ref(6)
let center = ref([47, 3])


let cities = ref([]);

async function getCities() {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/find?lat=45.758&lon=4.765&cnt=20&cluster=yes&lang=fr&units=metric&APPID=683c9161b07304af09f463da98aaa2e6');
    cities.value = response.data.list;
  } catch (error) {
    console.error(error);
  }
}

onMounted(async () => {
  await getCities();
  console.log(cities.value);
});




</script>

<template>
    <main style="height:600px; width:800px">
        <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
            <l-tile-layer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    layer-type="base"
                    name="Stadia Maps Basemap">
            </l-tile-layer>
            <div v-for="city in cities" :key="city.id">
                <l-marker :lat-lng="[ city.coord.lat , city.coord.lon]">
                    <l-popup class="popup" ref="popup">
                        <p>{{ city.name }}</p>
                        <p>Temps : {{ city.weather[0].description }}</p>
                        <p>Température : {{ city.main.temp }} C°</p>
                        <p>mise à jour : {{ format(city.dt * 1000) }}</p>
                    </l-popup>
                </l-marker>
            </div>
        </l-map>
    </main>
</template>


<style>
    html, body {
        margin: 0;
        padding: 0;
    }

    main {
        height: 100vh;
        width: 100vw;
    }

    #map :deep(.leaflet-marker-icon) {
        background-color: red;
    }

    .popup {
        margin: 0;
        padding: 1px;
        color: rgba(255, 255, 255, 0.87);
        background-color: #3e8ac4;
        
    }

    .leaflet-popup-content-wrapper .leaflet-popup-content {
        background-color: #3e8ac4;
        margin: -1px;
        padding: 10px;
        border-radius: 10px;
    }

    .leaflet-popup-tip {
        background-color: #3e8ac4;
    }

    p {
        margin: 0;
        font-size: 1.1rem;
    }

    
</style>