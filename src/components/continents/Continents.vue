<template>
    <div>
        <h1>Continents</h1>

        <fm-tableau :titres="['Name']"
                    :donnees="[{name: 'Orion'}]" />
    </div>
</template>

<script>
    import Tableau from '@/components/outils/Tableau.vue';

    export default {
        name: 'Continents',
        components: {
            'fm-tableau': Tableau
        }
    }
</script>

<style scoped>

</style>