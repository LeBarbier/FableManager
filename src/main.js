import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';

Vue.use(VueRouter);
const router = new VueRouter({ routes });

Vue.config.productionTip = true;

new Vue({
    router,
    template: '<App />',
    components: {
        App
    },
    render: h => h(App)
}).$mount('#app');
