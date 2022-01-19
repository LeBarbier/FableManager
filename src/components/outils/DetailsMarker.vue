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
            <button v-if="currentState === 'add'"
                    v-on:click="save">
                Add
            </button>
            <button v-if="currentState === 'readOnly'"
                    v-on:click="modifyMarker">
                Modify
            </button>
            <button v-if="currentState === 'modify'"
                    v-on:click="save">
                Save
            </button>
            <button v-if="isMarkerModified"
                    v-on:click="cancel">
                Cancel
            </button>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

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
                state: 0,
                marker: { titre: '', description: '' }
            }
        },
        computed: {
            currentState() {
                const enumState = ['add', 'readOnly', 'modify'];
                return enumState[this.state];
            },
            markerIsReadOnly() {
                return this.state === 1;
            },
            noMarkerSelected() {
                return this.selectedMarker === null;
            },
            isMarkerModified() {
                return (this.marker.id !== undefined && this.marker.titre !== this.selectedMarker.titre) ||
                    (this.marker.id === undefined && this.marker.titre !== '') ||
                    (this.selectedMarker.id !== undefined && this.marker.description !== this.selectedMarker.description);
            },
            emptyMarkerModel() {
                return { titre: '', description: '' };
            }
        },
        methods: {
            cancel() {
                if (this.selectedMarker) {
                    this.marker = this.selectedMarker;
                    this.state = 1;
                } else {
                    this.marker = this.emptyMarkerModel;
                    this.state = 0;
                }

            },
            modifyMarker() {
                this.state = 2;
            },
            nouveauMarqueurSelectionne(newMarker) {
                if (newMarker.titre === undefined) {
                    this.state = 0;
                    this.marker = this.emptyMarkerModel
                } else {
                    this.marker = _.clone(newMarker);
                    this.state = 1;
                }
            },
            save() {
                this.$emit('saveMarker', this.marker);
            }
        },
        watch: {
            selectedMarker: function (newMarker) {
                this.nouveauMarqueurSelectionne(newMarker);
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