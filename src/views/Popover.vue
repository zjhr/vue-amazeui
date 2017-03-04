<template>
    <vueview>
        <navbar slot="header" blue>
            Popover
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <group header="默认">
            <vue-button style="margin-left: 0px" blue @buttonClick="open('show')" ref="button">Popover</vue-button>
        </group>
            <popover :open="show" @Close="close('show')" :trigger="trigger"><p>Popover 内容</p></popover>
            
        <group header="定义右边">
            <vue-button style="margin-left: 0px" blue @buttonClick="open('show1')" ref="button1">Popover</vue-button>
        </group>
            <popover :open="show1" direction="right" @Close="close('show1')" :trigger="trigger1"><p>Popover 内容</p></popover>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import * as Button from 'components/button';
    import Popover from 'components/popover';
    export default {
        data() {
            return {
                show: false,
                show1: false,
                trigger: null,
                trigger1: null
            }
        },
        mounted() {
            this.trigger = this.$refs.button.$el
            this.trigger1 = this.$refs.button1.$el
        },
        methods: {
            open(val) {
                this[val] = true
            },
            close(val) {
                this[val] = false
            }
        },
        components: {
            ...Index,
            ...Button,
            Popover
        }

    }
</script>

<style scoped>

</style>