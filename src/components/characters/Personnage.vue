<template>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close" v-on:click="$emit('fermerModif')">&times;</span>
            <h1>{{ personnage.name }}</h1>
        </div>
    </div>
</template>

<script>
    import PersonnageService from '@/components/characters/PersonnageService.js';

    export default {
        name: 'Personnage',
        props: {
            personnageSelectionner: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                personnage: {}
            }
        },
        mounted() {
            this.personnage = PersonnageService.obtenirPersonnage(this.personnageSelectionner);
        }
    }
</script>

<style scoped>
    .modal {
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    /* Modal Content */
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }

    /* The Close Button */
    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

        .close:hover,
        .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
</style>