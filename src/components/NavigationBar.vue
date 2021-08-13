<template>
    <div class="navBar">
        <router-link to="/"><img class="logo" src="..\assets\logo_placeholder.png" /></router-link>
        <ul class="menu__list">
            <li class="menu__item"><router-link to="/Characters">Characters</router-link></li>
            <li class="menu__item"><router-link to="/">Monsters</router-link></li>
            <li class="menu__item"><router-link to="/">Towns</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'NavigationBar'
    }
</script>

<style scoped>
    .logo {
        width: 128px;
        height: 128px;
    }

    .navBar {
        min-width: 215px;
        background-color: #454545;
        float: left;
        height: 98%;
        position: absolute;
    }

    .menu__list{
        padding: 0;
    }

    .menu__item {
        font-size: 20px;
        list-style: none;
        padding: 16px 6px;
        text-align: center;
        font-weight: 500;
    }

    .menu__item:active {
        background-color: #383838;
    }

    .menu__item a {
        color: #d5d5d5;
        text-decoration: none;
    }
</style>