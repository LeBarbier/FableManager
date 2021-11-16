<template>
    <div>
        <div id="map" class="map__container"></div>
    </div>
</template>

<script>
    import leaflet from 'leaflet';

    export default {
        name: "Ville",
        props: {
            ville: {
                type: String,
                required: true
            }
        },
        mounted() {
            var map = leaflet.map('map', { crs: leaflet.CRS.Simple }).setView([0, 0], 0);

            var bounds = [[0, 0], [800, 750]];
            const testVillePath = require("../../assets/villes/" + this.ville.toLowerCase() + ".png");
            leaflet.imageOverlay(testVillePath, bounds).addTo(map);

            map.fitBounds(bounds);
            map.setMaxBounds(bounds);
            map.on('drag', function () {
                map.panInsideBounds(bounds, { animate: false });
            });
        }
    }
</script>

<style scoped>
    @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';

    .map__container {
        height: 800px;
    }
</style>