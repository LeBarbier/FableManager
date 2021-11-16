<template>
    <div class="navBar">
        <router-link to="/"><img class="logo" src="..\assets\logo_placeholder.png" /></router-link>
        <ul class="menu__list">
            <li class="menu__item"><router-link to="/Characters">Characters</router-link></li>
            <li class="menu__item"><router-link to="/">Monsters</router-link></li>
            <li class="menu__item"><router-link to="/">Items</router-link></li>
            <li class="menu__item"><router-link to="/Maps">Maps</router-link></li>
        </ul>
    </div>
</template>

<script>
    import VilleService from '@/components/villes/VilleService.js';

    export default {
        name: 'NavigationBar',
        computed: {
            villes() {
                return VilleService.obtenirVilles().map(v => { return { name: v } });
            }
        }
    }
</script>

<style scoped>
    .logo {
        width: 128px;
        height: 128px;
        padding: 0 20%;
    }

    .navBar {
        min-width: 215px;
        background-color: #454545;
        float: left;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .menu__list {
        padding: 25px 0;
        width: 85%;
        margin: auto;
    }

    .menu__item {
        font-size: 20px;
        list-style: none;
        padding: 20px 0;
        text-align: center;
        font-weight: 600;
        border-bottom: 1px solid #fbeee0;
        border-bottom-width: thin;
        line-height: 1.5;
    }

        .menu__item a:hover {
            color: #ffee56;
        }

        .menu__item:active {
            background-color: #383838;
        }

        .menu__item a {
            color: #fbeee0;
            text-decoration: none;
            font-weight: 600;
            width: 100%;
            letter-spacing: .15em;
            text-transform: uppercase;
        }

    .dropdown .dropbtn {
        border: none;
        background-color: inherit;
        font-family: inherit;
        color: #fbeee0;
        letter-spacing: .15em;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 600;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

        .dropdown-content a {
            float: none;
            color: black;
            padding: 12px 16px;
            display: block;
            text-align: left;
            width: 83%;
        }

            .dropdown-content a:hover {
                background-color: #787878;
            }

    .dropdown:hover .dropdown-content {
        display: block;
        transition: visibility 3s, opacity 0.5s linear;
    }

    .villes__dropdown {
        list-style-type: none;
        padding: 0;
    }
</style>


<!--
    <div class="dropdown">
        <button class="dropbtn">
            Towns
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <ul class="villes__dropdown">
                <li v-for="ville in villes" :key="ville.name">
                    <router-link :to="{ name: 'Town', params: { ville: ville.name } }">
                        {{ ville.name }}
                    </router-link>
                        :to="{ name: 'CreerObservationIntervention', params: { idEcole: idEcole, groupe: null, eleves: [eleveCourant] } }"
                </li>
            </ul>
        </div>
    </div>
 -->