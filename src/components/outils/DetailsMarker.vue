<template>
    <div class="markerDetails__container">
        <div class="markerDetails_input">
            <label for="markerTitle">Marker selected :</label>
            <br />
            <input v-model="marker.titre"
                   :disabled="markerIsReadOnly"
                   name="markerTitle"
                   type="text"
                   placeholder="Marker's title" />
        </div>
        <div class="markerDetails_input">
            <label for="markerDescription">Description :</label>
            <br />
            <input v-model="marker.description"
                   :disabled="markerIsReadOnly"
                   name="markerDescription"
                   type="text"
                   placeholder="Marker's description" />
        </div>

        <div class="markerDetails__button">
            <button v-if="markerIsReadOnly"
                    v-on:click="modifyMarker"
                    :disabled="noMarkerSelected">Modify</button>
            <button v-else>Save</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailsMarker",
        props: {
            selectedMarker: {
                Type: Object,
                required: true
            }
        },
        data() {
            return {
                markerIsReadOnly: true,
                marker: {titre: '', description: ''}
            }
        },
        computed: {
            noMarkerSelected() {
                return this.selectedMarker === null;
            }
        },
        methods: {
            modifyMarker() {
                this.markerIsReadOnly = !this.markerIsReadOnly;
            },
            saveMarker() {
                this.$emit('saveMarker', this.marker);
            }
        },
        watch: {
            selectedMarker: function (newMarker) {
                this.markerIsReadOnly = true;
                this.marker = newMarker;
            }
        }
    }
</script>

<style scoped>
    .markerDetails__container {
        width: 80%;
        border: 1px solid gray;
        box-shadow: 2px 2px 6px;
        border-radius: 6px;
        margin: 0 auto 1em auto;
        padding: 1em 2em;
    }

    .markerDetails_input {
        margin: 0 0 1em 0;
    }

    .markerDetails_input input {
        width: 60%;
        margin: 0 0.5em;
    }

    .markerDetails_input label {
        font-weight: bold;
        font-size: 18px;
    }

    .markerDetails_input input:disabled{
        border: none;
    }

    .markerDetails__button {
        float: right;
        margin: -1.5em 0.5em;
    }
</style>