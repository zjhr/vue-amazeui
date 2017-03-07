<template>
    <section class="accordion" :class="{'accordion-inset':inset}">
        <slot></slot>
    </section>
</template>

<script>
    import Items from '../internal/items.js';
    export default {
        name: 'accordion',
        mixins: [Items],
        props: {
            inset: Boolean, //是否添加边距。默认为全宽填满容器，设置 inset 属性以后添加 15px 的边距。
            behavior: Boolean, //是否手风琴式,默认手风琴,accordion(手风琴)和collapsible(可折叠)
            noAnimated: Boolean //关闭动画
        },
        methods: {
            accordionFun(val, oldval) {
                if (!this.behavior) { //手风琴
                    this.$children[oldval].activeitem = false;
                }
            }
        },
        data() {
            return {
                openitem: false,
                newopenitemnum: 0,
                oldopenitemnum: 0
            }
        },
        watch: {
            openitem(val, oldval) {
                this.accordionFun(this.newopenitemnum, this.oldopenitemnum)
            },
            newopenitemnum(val, oldval) {
                this.oldopenitemnum = oldval
                this.openitem = !this.openitem
            }
        }
    }

</script>