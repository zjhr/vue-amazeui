<template>
    <div class="group" :class="{'group-no-padded':noPadded}">
        <header v-if="$slots.header || header" class="group-header">
            {{header}}
            <slot name="header"></slot>
        </header>
        <div class="group-body">
            <slot></slot>
        </div>
        <footer v-if="$slots.footer || footer" class="group-footer">
            {{footer}}
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'group',
        props: {
            header: String, //分组标题。
            footer: String, //分组脚注。
            noPadded: Boolean //是否移除分组内容的 padding。
        }
    }
</script>

<style scoped>

</style>