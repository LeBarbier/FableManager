<template>
    <div>
        <h1>Continents</h1>

        <fm-tableau :titres="['Name']"
                    :donnees="[{name: 'Orion'}]"
                    @modifyClicked="donnee => ouvrirContinentSelectionner(donnee)"/>
    </div>
</template>

<script>
    import Tableau from '@/components/outils/Tableau.vue';

    export default {
        name: 'Continents',
        components: {
            'fm-tableau': Tableau
        },
        methods: {
            ouvrirContinentSelectionner(donnee) {
                this.$router.push({ name: 'Map', params: { map: donnee.name } });
            }
        }
    }
</script>

<style scoped>

</style>