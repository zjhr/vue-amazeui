<template>
    <label class="field-container">
        <span v-if="label" v-text="label" class="field-label"></span>
        <slot></slot>
        <span v-if="check" class="icon icon-check field-icon"></span>
    </label>
</template>

<script>
    export default {
        name: 'field',
        props: {
            label: String,
            check: Boolean
        }
    }
</script>

<style scoped>

</style>