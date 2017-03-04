<template>
    <div class="g" :class="girdClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'grid',
        props: {
            wrap: { //'wrap'换行, 'reverse'反转 wrap 排列,网格容器 flex-wrap 属性，是否换行，默认为 nowrap
                type: [Boolean, String],
                default: false
            },
            noCollapse: Boolean, //是否移除列默认的内边距（padding）
            avg: { //平均分配单元格为 n 列。1~6
                type: [Number, Boolean, String],
                default: false
            },
            align: { //行中列宽度总和不足 6 时的对齐方式,'right', 'center', 'between', 'around'
                type: [String, Boolean, String],
                default: false
            },
            bordered: Boolean //网格是否显示边框，边框可用于制作九宫格效果。
        },
        computed: {
            girdClass() {
                return {
                    'g-wrap': this.wrap === 'wrap',
                    'g-wrap-reverse': this.wrap === 'reverse',
                    'g-collapse': this.noCollapse,
                    [`g-avg-${this.avg}`]: this.avg > 0 && this.avg < 7,
                    [`g-${this.align}`]: this.align,
                    'g-bordered': this.bordered
                }
            }
        }

    }
</script>

<style scoped>

</style>