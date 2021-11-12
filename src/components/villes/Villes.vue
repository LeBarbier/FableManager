<template>
    <div>
        <h1>Towns</h1>

        <table class="villes__liste">
            <tr class="villes__title">
                <th>Name</th>
            </tr>
            <tr v-for="ville in villes" :key="ville.nom" class="ville__detail">
                <td>
                    {{ ville }}
                </td>
                <td>
                    <button class="bouton__ouvrir" role="button" v-on:click="afficherModalModifierPersonnage(personnage.name)">Open</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import VilleService from '@/components/villes/VilleService.js';

    export default {
        name: 'Villes',
        components: {
        },
        data() {
            return {
                personnageSelectionner: ""
            }
        },
        computed: {
            villes() {
                return VilleService.obtenirVilles();
            }
        }
    }
</script>

<style scoped>
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