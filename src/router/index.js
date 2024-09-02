import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import CitiesList from '../views/CitiesList.vue';
//import City from '../components/City.vue';
import CitiesMap from '../components/CitiesMap.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name:"home" ,component: HelloWorld},
        {path: '/villes', name:"villes" , component: CitiesList},
        {path: '/carte', name:"carte" , component: CitiesMap},
    ]
});

export default router;