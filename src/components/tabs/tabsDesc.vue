<template>
    <div class="tab-panel" :class="{'active':activeItem}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'tabs-item',
        data() {
            return {
                activeItem: false
            }
        }

    }
</script>

<style scoped>

</style>