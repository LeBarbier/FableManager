import home from './components/Home.vue';
import characters from './components/characters/Personnages.vue';
import map from './components/outils/Map.vue';
import maps from './components/map/Maps.vue';

export const routes = [
    { path: '/', component: home },
    { path: '/Characters', component: characters },
    { path: '/Maps', component: maps },
    {
        path: '/Map',
        name: 'Map',
        component: map,
        props: (route) => {
            return { map: route.params.map };
        }
    }
]