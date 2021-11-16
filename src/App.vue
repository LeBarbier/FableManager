<template>
    <div id="app">
        <!--<fm-home />-->
        <fm-nav-bar />
        <router-view class="conteneur"></router-view>
    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import NavigationBar from './components/NavigationBar.vue';

    export default {
        name: 'app',
        components: {
            'fm-home': Home,
            'fm-nav-bar': NavigationBar
        }
    };
</script>

<style>
    html {
        font-family: Garamond;
    }

    .conteneur {
        left: 250px;
        position: absolute;
        width: 70%;
    }
</style>

