<template>
    <div class="home">
        <!-- @mousemove="(event) => print(event)" -->
        <!--<img src="../assets/Valia 2021-07-23-09-11.jpeg" />-->
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {
        },
        props: {
        },
        methods: {
            //print(event) {
            //    console.log(event.buttons);
            //    if (event.buttons == 1) {
            //        console.log(event);
            //    } else if (event.buttons == 2) {
            //        console.log(event);
            //    }
            //}
        }
    };
</script>

<style scoped>
    .home {
        height: 90%;
    }

    img {
        height: 100%;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
</style>