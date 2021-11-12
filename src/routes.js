import home from './components/Home.vue';
import characters from './components/characters/Personnages.vue';
import world from './components/map/World.vue';
import ville from './components/villes/Ville.vue'

export const routes = [
    { path: '/', component: home },
    { path: '/Characters', component: characters },
    { path: '/World', component: world },
    {
        path: '/Town',
        name: 'Town',
        component: ville,
        props: (route) => {
            return { ville: route.params.ville };
        }
    }
        // route => {  console.log(route); return { ville: route.params.ville } }
]