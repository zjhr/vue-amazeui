<template>
    <vueview>
        <vueview slot="offcanvas" :pLeft="pLeft" :pRight="pRight">
            <navbar slot="header" blue>
                OffCanvas
                <icon name="left-nav" slot="left" titleRight="返回" back></icon>
            </navbar>
            <div class="sk-demos">
                <h2>Overlay</h2>
                <group header="左侧显示 OffCanvas">
                    <vue-button blue @buttonClick="open('offcanvas1')">显示左侧 OffCanvas</vue-button>
                </group>
                <group header="自定义宽度 OffCanvas">
                    <vue-button sblue @buttonClick="open('offcanvas2')">宽度80% OffCanvas</vue-button>
                </group>
                <group header="右侧显示 OffCanvas">
                    <vue-button blue @buttonClick="open('offcanvas3')">右侧显示 OffCanvas</vue-button>
                </group>
                <group header="向下显示 OffCanvas">
                    <vue-button sblue @buttonClick="open('offcanvas4')">向下显示 OffCanvas</vue-button>
                </group>
                <group header="向上显示 OffCanvas">
                    <vue-button blue @buttonClick="open('offcanvas5')">向上显示 OffCanvas</vue-button>
                </group>
                <h2>Push</h2>
                <group header="push 左侧显示 OffCanvas">
                    <vue-button sblue @buttonClick="open('offcanvas6','pLeft')">push 左侧显示 OffCanvass</vue-button>
                </group>
                <group header="push 右侧显示 宽度80% OffCanvas">
                    <vue-button blue @buttonClick="open('offcanvas7','pRight')">push 右侧显示 宽度80% OffCanvass</vue-button>
                </group>
            </div>
        </vueview>
        <off-canvas :open="offcanvas1" @Close="close('offcanvas1')">
            <div>
                <h3 class="margin">OffCanvas 内容</h3>
                <list>
                    <list-item title="组件" href="/"></list-item>
                    <list-item title="关于" href="About"></list-item>
                    <list-item title="GitHub" href='github'></list-item>
                </list>
            </div>
        </off-canvas>
        <off-canvas sildewh="80%" :open="offcanvas2" @Close="close('offcanvas2')">
            <p>宽度80%OffCanvas 内容</p>
        </off-canvas>
        <off-canvas silde="right" :open="offcanvas3" @Close="close('offcanvas3')">
            <p>右侧边栏 OffCanvas 内容</p>
        </off-canvas>
        <off-canvas silde="bottom" :open="offcanvas4" @Close="close('offcanvas4')">
            <p>向下显示 OffCanvas 内容</p>
        </off-canvas>
        <off-canvas silde="top" :open="offcanvas5" @Close="close('offcanvas5')">
            <p>向上显示 OffCanvas 内容</p>
        </off-canvas>
        <off-canvas slot="offcanvas" :open="offcanvas6" @Close="close('offcanvas6','pLeft')">
            <p>push 左侧显示 OffCanvass 内容</p>
        </off-canvas>
        <off-canvas slot="offcanvas" silde="right" sildewh="80%" :open="offcanvas7" @Close="close('offcanvas7','pRight')">
            <p>push 右侧显示 宽度80% OffCanvass 内容</p>
        </off-canvas>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import * as Button from 'components/button';
    import * as List from 'components/list';
    import OffCanvas from 'components/offcanvas';
    export default {
        data() {
            return {
                pLeft: false,
                pRight: false,
                offcanvas1: false,
                offcanvas2: false,
                offcanvas3: false,
                offcanvas4: false,
                offcanvas5: false,
                offcanvas6: false,
                offcanvas7: false
            }
        },
        methods: {
            open(value, push) {
                this[value] = true
                if (push) this[push] = true
            },
            close(value, push) {
                this[value] = false
                if (push) this[push] = false
            }
        },
        beforeRouteLeave(to, from, next) {
            if (to.path === '/github') {
                let _opw = window.open('_blank')
                _opw.location.href = "https://github.com/zjhr/vue-amazeui"
            } else {
                next()
            }
        },
        watch: {
            offcanvas6(val, oldval) {
                if (val) {
                    this.$parent.$parent.transform = '70%'
                } else {
                    this.$parent.$parent.transform = '0'
                }
            },
            offcanvas7(val, oldval) {
                if (val) {
                    this.$parent.$parent.transform = '-80%'
                } else {
                    this.$parent.$parent.transform = '0'
                }
            }
        },
        components: {
            ...Index,
            ...Button,
            ...List,
            OffCanvas
        }

    }

</script>

<style scoped>

</style>