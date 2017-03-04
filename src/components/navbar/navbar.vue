<template>
    <header ref="navbar" class="navbar" :class="objectClass">
        <h2 class="navbar-title" :class="NavbarTitle">
            <slot></slot>
        </h2>
        <div v-if="$slots.left" class="navbar-nav navbar-left">
            <slot name="left"></slot>
        </div>
        <div v-if="$slots.right" class="navbar-nav navbar-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
    import color from '../internal/color';
    export default {
        name: 'navbar',
        mixins: [color],
        props: {
            titleOnLeft: { //主标题是否居左，默认居中。
                type: Boolean
            }
        },
        data() {
            return {
                name: 'navbar'
            }
        },
        computed: {
            NavbarTitle() {
                return {
                    'navbar-center': !this.titleOnLeft,
                    'navbar-left': this.titleOnLeft
                }
            }
        }

    }

</script>

<style scoped>

</style>