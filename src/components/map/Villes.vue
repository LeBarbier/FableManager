<template>
    <div>
        <h2>Towns</h2>

        <fm-tableau :titres="['Name']"
                    :donnees="villes"
                    @modifyClicked="donnee => ouvrirVilleSelectionner(donnee)"/>
    </div>
</template>

<script>
    import VilleService from '@/components/map/VilleService.js';
    import Tableau from '@/components/outils/Tableau.vue';

    export default {
        name: 'Villes',
        components: {
            'fm-tableau': Tableau
        },
        computed: {
            villes() {
                return VilleService.obtenirVilles().map(ville => { return { name: ville }});
            }
        },
        methods: {
            ouvrirVilleSelectionner(donnee) {
                const ville = VilleService.obtenirVilleFromNom(donnee.name);
                this.$router.push({ name: 'Map', params: { map: ville } });
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #422800;
    }

    .villes__liste {
        padding-top: 12px;
        width: 90%;
        margin: 0px 5%;
        text-align: center;
        border-spacing: 0px;
        border-bottom: 3px solid maroon;
        font-size: 18px;
        font-weight: 600;
    }

    .villes__title {
        background-color: maroon;
        color: white;
    }

        .villes__title th {
            padding: 12px 2px;
            font-size: 22px;
        }

            .villes__title th:first-child {
                border-top-left-radius: 12px;
            }

            .villes__title th:last-child {
                border-top-right-radius: 12px;
            }

    .ville__detail td {
        padding: 10px 7px;
    }

    .ville__detail:nth-child(2n+1) {
        background-color: #dedede;
    }

    .ville__detail:hover {
        background-color: rgb(192,192,192, 0.2);
    }

    .bouton__ouvrir {
        background-color: #fbeee0;
        border: 2px solid #422800;
        border-radius: 30px;
        box-shadow: #422800 4px 4px 0 0;
        color: #422800;
        cursor: pointer;
        display: inline-block;
        font-weight: 600;
        font-size: 14px;
        padding: 0 18px;
        line-height: 25px;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

        .bouton__ouvrir:hover {
            background-color: #fff;
        }

        .bouton__ouvrir:active {
            box-shadow: #422800 2px 2px 0 0;
            transform: translate(2px, 2px);
        }
</style>