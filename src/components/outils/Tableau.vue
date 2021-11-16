<template>
    <div>
        <table class="characters__liste">
            <tr class="characters__title">
                <th v-for="titre in titres" :key="titre">{{ titre }}</th>
                <th></th>
            </tr>
            <tr v-for="(donnee, index) in donnees" v-bind:key="index" class="character__detail">
                <td v-for="info in donnee" v-bind:key="info">{{info}}</td>
                
                <td>
                    <button class="button-74" role="button" v-on:click="modifyClicked(donnee)">Modify</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Tableau',
        props: {
            titres: {
                type: Array,
                required: true,
                default: () => []
            },
            donnees: {
                type: Array,
                required: true,
                default: () => []
            }
        },
        methods: {
            modifyClicked(donnee) {
                this.$emit('modifyClicked', donnee);
            }
        }
    }
</script>

<style scoped>
    .characters__liste {
        padding-top: 12px;
        width: 90%;
        margin: 0px 5%;
        text-align: center;
        border-spacing: 0px;
        border-bottom: 3px solid maroon;
        font-size: 18px;
        font-weight: 600;
    }

    .characters__title {
        background-color: maroon;
        color: white;
    }

        .characters__title th {
            padding: 12px 2px;
            font-size: 22px;
        }

            .characters__title th:first-child {
                border-top-left-radius: 12px;
            }

            .characters__title th:last-child {
                border-top-right-radius: 12px;
            }

    .character__detail td {
        padding: 10px 7px;
    }

    .character__detail:nth-child(2n+1) {
        background-color: #dedede;
    }

    .character__detail:hover {
        background-color: rgb(192,192,192, 0.2);
    }

    .button-74 {
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

        .button-74:hover {
            background-color: #fff;
        }

        .button-74:active {
            box-shadow: #422800 2px 2px 0 0;
            transform: translate(2px, 2px);
        }
</style>