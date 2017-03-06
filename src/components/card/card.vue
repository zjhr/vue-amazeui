<template>
    <div class="card">
        <div v-if="$slots.header || title" class="card-header"
        :class="{'card-cover' : bg}" :style="img">
            <h2 v-if="title" class="card-title">
                {{title}}
            </h2>
            <slot v-if="$slots.header" name="header"></slot>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div v-if="$slots.footer" class="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'card',
        props: {
            title: String, //标题
            bg: String //背景
        },
        computed: {
            img() {
                return this.bg ? `background-image:url(${this.bg})` : ''
            }
        }

    }
</script>

<style scoped>

</style>