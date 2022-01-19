<template>
    <div>
        <div id="map-header" class="map__header">
            <h1 class="city__name">{{map.name}}</h1>
            <fm-details-marker :selected-marker="selectedMarker" v-on:saveMarker="saveMarker" />
        </div>

        <div id="map" class="map__container" />
    </div>
</template>

<script>
    import leaflet from 'leaflet';
    import DetailsMarker from '@/components/outils/DetailsMarker.vue';
    import MapPopup from '@/components/outils/MapPopup.vue';
    import VilleService from '@/components/map/VilleService.js';

    export default {
        name: "Map",
        components: {
            'fm-popup': MapPopup,
            'fm-details-marker': DetailsMarker
        },
        props: {
            map: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                selectedMarker: {}
            };
        },
        computed: {
        },
        mounted() {
            var leafletMap = this.initializeMap();
            this.initializeMarkers(leafletMap);
        },
        methods: {
            initializeMap() {
                var map = leaflet.map('map', { crs: leaflet.CRS.Simple }).setView([0, 0], 0);

                var bounds = [[0, 0], [800, 750]];
                const testVillePath = require("../../assets/villes/" + this.map.name.toLowerCase() + ".png");
                leaflet.imageOverlay(testVillePath, bounds).addTo(map);

                map.fitBounds(bounds);
                map.setMaxBounds(bounds);
                map.on('drag', function () {
                    map.panInsideBounds(bounds, { animate: false });
                });
                map.on('click', (positionClicked) => {
                    const latlng = positionClicked.latlng;
                    var leafletMarker = leaflet.marker({ lat: latlng.lat, lng: latlng.lng });
                    this.initialiserNouveauMarqueur(latlng);
                    leafletMarker.addTo(map)
                });

                return map;
            },
            initializeMarkers(leafletMap) {
                this.map.markers.forEach(marker => {
                    var leafletMarker = leaflet.marker({ lat: marker.lat, lng: marker.long });
                    leafletMarker.on('click', () => this.markerClicked(marker));

                    leafletMarker.addTo(leafletMap);
                });
            },
            initialiserNouveauMarqueur(latlng) {
                this.selectedMarker = {};
                this.selectedMarker = {
                    lat: Math.trunc(latlng.lat),
                    lng: Math.trunc(latlng.lng)
                }
            },
            markerClicked(marker) {
                this.selectedMarker = marker;
            },
            saveMarker(marker) {
                VilleService.modifierMarqueurVille(this.map.name, marker);
            }
        }
    }
</script>

<style scoped>
    @import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';

    .city__name {
        font-weight: bold;
        font-size: 32px;
        padding: 0 2px;
        margin: 12px 4px;
    }

    .map__container {
        height: 800px;
        border-radius: 4px;
    }
</style>