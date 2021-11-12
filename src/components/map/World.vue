<template>
    <div v-on:contextmenu="openMenu">
        <fm-map />
    </div>
</template>

<script>
    import Map from './Map.vue';

    export default {
        name: 'World',
        components: {
            'fm-map': Map
        },
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    img {
        max-width: 750px;
    }
</style>