<template>
    <div>
        <h1>Characters</h1>

        <table class="characters__liste">
            <tr class="characters__title">
                <th>Level</th>
                <th>Name</th>
                <th>Class</th>
                <th>Race</th>
            </tr>
            <tr class="character__detail" v-for="character in characters"
                :key="character.name">
                <td>
                    {{ character.level }}
                </td>
                <td>
                    {{ character.name }}
                </td>
                <td>
                    {{ character.class }}
                </td>
                <td>
                    {{ character.race }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import Characters from '@/assets/data/characters/characters.json';
    export default {
        name: 'Characters',
        data() {
            return {
                characters: Characters
            }
        }
    }
</script>

<style scoped>
    .characters__liste {
        padding-top: 12px;
        width: 70%;
        margin: 0px 5%;
        text-align: center;
        border-spacing: 0px;
        border-bottom: 3px solid maroon;
        font-size: 18px;
        font-weight: 600;
    }

    .characters__title {
        background-color: maroon;
        color: white;
    }

        .characters__title th {
            padding: 12px 2px;
            font-size: 22px;
        }

        .characters__title th:first-child {
            border-top-left-radius: 12px;
        }

        .characters__title th:last-child {
            border-top-right-radius: 12px;
        }

    .character__detail td {
        padding: 10px 7px;
    }

    .character__detail:nth-child(2n+1) {
        background-color: #dedede;
    }

    .character__detail:hover {
        background-color: rgb(192,192,192, 0.2);
    }
</style>