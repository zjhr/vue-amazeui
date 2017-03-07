<template>
    <div class="loader" :class="[objectClass,loaderObjectClass]">
        <div class="loader-bounce1"></div>
        <div class="loader-bounce2"></div>
        <div class="loader-bounce3"></div>
    </div>
</template>

<script>
    import color from '../internal/color.js';
    export default {
        name: 'loader',
        mixins: [color],
        props: {
            white: Boolean,
            rounded: Boolean
        },
        data() {
            return {
                name: 'loader',
                pwhite: false
            }
        },
        computed: {
            loaderObjectClass() {
                return {
                    'loader-white': this.white || this.pwhite,
                    'loader-rounded': this.rounded
                }
            }
        }

    }

</script>