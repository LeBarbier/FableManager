<template>
    <div>
        <div id="map" class="map__container"></div>

        <img id="map__Image" src="pngPathVille"/>
    </div>
</template>

<script>
    import leaflet from 'leaflet';
    import Villes from '@/assets/data/villes/villes.json';

    export default {
        name: 'Map',
        prop: {
            ville: {
                type: String,
                required: true
            }
        },
        mounted() {
            var map = leaflet.map('map', {
                crs: leaflet.CRS.Simple
            }).setView([0,0], 0);

            var bounds = [[0, 0], [800, 750]];
            var imagePath = document.getElementById('map__Image').getAttribute("src");
            leaflet.imageOverlay(imagePath, bounds).addTo(map);
            
            map.fitBounds(bounds);
            map.setMaxBounds(bounds);
            map.on('drag', function () {
                map.panInsideBounds(bounds, { animate: false });
            });
        },
        computed: {
            pngPathVille(){
                return Villes.[this.ville].pngPath;
            }
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
        display: none;
    }
</style>