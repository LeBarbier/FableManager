<template>
    <div>
        <h1>Characters</h1>

        <ul class="characters_liste">
            <li v-for="character in characters"
                class="character__nom"
                :key="character.name">
                {{ character.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Characters',
        data() {
            return {
                characters: [{ name: 'alice' }, { name: 'jean' }]
            }
        }
    }
</script>

<style scoped>
    .character__nom {
        list-style-type: none;
    }

    .characters_liste {
        padding: 0px;
    }
</style>