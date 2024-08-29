import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import CitiesList from '../views/CitiesList.vue';
import City from '../components/City.vue';

const router = createRouter({
    history: createMemoryHistory(),
    routes:[
        {path: '/', component: HelloWorld},
        {path: '/villes', component: CitiesList},
        {path: '/ville', component: City},
    ]
});

export default router;