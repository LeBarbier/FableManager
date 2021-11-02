<template>
    <div v-on:contextmenu="openMenu">
        <h1>Hello World!</h1>
        <img src="../../assets/Omerion.jpg" />

        <ul id="right-click-menu" tabindex="-1" ref="right" v-if="viewMenu" v-on:blur="closeMenu" v-bind:style="{top:top, left:left}">
            <li>First list item</li>
            <li>Second list item</li>
        </ul>
        <!--v-style="top:top, left:left" -->
    </div>
</template>

<script>
    export default {
        name: 'World',
        data() {
            return {
                viewMenu: false,
                top: '0px',
                left: '0px'
            }
        },
        methods: {
            setMenu: function (top, left) {
                var largestHeight = window.innerHeight - this.$refs["right"].offsetHeight - 25;
                var largestWidth = window.innerWidth - this.$refs["right"].offsetWidth - 25;

                if (top > largestHeight) top = largestHeight;

                if (left > largestWidth) left = largestWidth;

                left = left - 250;

                this.top = top + 'px';
                this.left = left + 'px';
            },
            closeMenu: function () {
                this.viewMenu = false;
            },
            openMenu: function (e) {
                this.viewMenu = true;

                this.$nextTick(function () {
                    this.$refs["right"].focus();

                    this.setMenu(e.y, e.x)
                }.bind(this));
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>
    img {
        max-width: 750px;
    }

    #right-click-menu {
        background: #FAFAFA;
        border: 1px solid #BDBDBD;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
        display: block;
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        width: 250px;
        z-index: 999999;
    }
</style>