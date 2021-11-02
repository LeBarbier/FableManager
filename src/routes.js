import Home from './components/Home.vue';
import Characters from './components/characters/Personnages.vue';
import World from './components/map/World.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/Characters', component: Characters },
    { path: '/World', component: World }
    //{ path: '/About', component: About },
    //{ path: '/Cards', component: Cards, props: route => ({ setCode: route.query.setCode }) },
    //{ path: '/Card', component: Card, props: route => ({ setCode: route.query.setCode, cardName: route.query.cardName }) }
]