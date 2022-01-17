<template>
    <div>
        <h1>Maps</h1>

        <div class="maps">
            <fm-villes></fm-villes>
            <fm-continents></fm-continents>
        </div>
    </div>
</template>

<script>
    import Villes from '@/components/map/Villes.vue';
    import Continents from '@/components/continents/Continents.vue';

    export default {
        name: 'Maps',
        components: {
            'fm-villes': Villes,
            'fm-continents': Continents
        }
    }

</script>

<style scoped>
    .maps {
        padding: 0px 16px;
    }
</style>