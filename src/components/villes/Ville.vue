<template>
    <div>
        <div id="map" class="map__container"></div>

        <!--<img id="map__Image" src="../../assets/villes/osa.png" />-->
    </div>
</template>

<script>
    import leaflet from 'leaflet';
    import VilleService from '@/components/villes/VilleService.js';

    export default {
        name: "Ville",
        props: {
            ville: {
                type: String,
                required: true
            }
        },
        mounted() {
            var map = leaflet.map('map', {
                crs: leaflet.CRS.Simple
            }).setView([0, 0], 0);

            var bounds = [[0, 0], [800, 750]];
            // var imagePath = document.getElementById('map__Image').getAttribute("src");
            const test = VilleService.obtenirVilleFromNom(this.ville).pngPath;
            console.log(test);
            const testVillePath = require("../../assets/villes/"+ this.ville.toLowerCase() +".png");

            // 'http://localhost:8080/img/osa.3638e13e.png'
            leaflet.imageOverlay(testVillePath, bounds).addTo(map);

            map.fitBounds(bounds);
            map.setMaxBounds(bounds);
            map.on('drag', function () {
                map.panInsideBounds(bounds, { animate: false });
            });
        },
        computed: {
        }
    }
</script>

<style scoped>
    @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';

    .map__container {
        height: 800px;
        width: 750px;
    }

    img {
        /*display: none;*/
    }
</style>