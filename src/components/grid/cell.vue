<template>
    <div class="col" :class="colClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'cell',
        props: {
            cells: { //列宽所占的比例，1-6 的数字
                type: [Number, Boolean, String],
                default: false
            },
            offset: { //列偏移（与左边元素的外边距）的数量。1-6 的数字
                type: [Number, Boolean, String],
                default: false
            },
            shrink: { //列是否自动收缩为内容宽度。
                type: Boolean,
                default: false
            }
        },
        computed: {
            colClass() {
                return {
                    [`col-${this.cells}`]: this.cells > 0 && this.cells < 7,
                    [`col-offset-${this.offset}`]: this.offset > 0 && this.offset < 7,
                    'col-shrink': this.shrink
                }
            }
        }

    }
</script>

<style scoped>

</style>