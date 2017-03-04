<template>
    <ul class="list" :class="{'list-inset':inset}">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: 'list',
        props: {
            inset: Boolean //是否含外边距
        }
    }
</script>

<style scoped>

</style>