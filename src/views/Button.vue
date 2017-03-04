<template>
    <vueview>
        <navbar slot="header" blue>
            Button
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <div class="sk-demos">
            <group header="默认">
                <vue-button>default</vue-button>
            </group>
            <group header="颜色样式">
                <vue-button blue>Primary</vue-button>
                <vue-button sblue>Secondary</vue-button>
                <vue-button green>Success</vue-button>
                <vue-button orange>Warning</vue-button>
                <vue-button red>Alert</vue-button>
                <vue-button black>Dark</vue-button>
            </group>
            <group header="块级显示">
                <vue-button block>Default Block</vue-button>
                <vue-button blue block>Primary Block</vue-button>
            </group>
            <group header="按钮大小">
                <vue-button amSize="xs">Default xs</vue-button>
                <vue-button amSize="sm">Default sm</vue-button>
                <vue-button>Default</vue-button>
                <vue-button amSize="lg">Default lg</vue-button>
                <vue-button amSize="xl">Default xl</vue-button>
            </group>
            <group header="按钮状态">
                <h4>disabled</h4>
                <vue-button blue disabled>Primary</vue-button>
                <h4>active</h4>
                <vue-button blue active>Primary</vue-button>
            </group>
            <group header="形状镂空">
                <vue-button hollow>default</vue-button>
                <vue-button blue hollow>Primary</vue-button>
                <vue-button sblue hollow>Secondary</vue-button>
                <vue-button green hollow>Success</vue-button>
                <vue-button orange hollow>Warning</vue-button>
                <vue-button red hollow>Alert</vue-button>
                <vue-button black hollow>Dark</vue-button>
            </group>
            <h2>Button Group</h2>
            <group header="默认形状">
                <button-group>
                    <vue-button>left</vue-button>
                    <vue-button>center</vue-button>
                    <vue-button>right</vue-button>
                </button-group>
                <button-group blue>
                    <vue-button>left</vue-button>
                    <vue-button>center</vue-button>
                    <vue-button>right</vue-button>
                </button-group>
                <button-group red>
                    <vue-button>left</vue-button>
                    <vue-button>center</vue-button>
                    <vue-button>right</vue-button>
                </button-group>
            </group>
            <group header="镂空按钮组">
                <button-group blue hollow>
                    <vue-button>left</vue-button>
                    <vue-button>center</vue-button>
                    <vue-button>right</vue-button>
                </button-group>
            </group>
            <group header="按钮组大小">
                <button-group amSize="xs">
                    <vue-button>left</vue-button>
                    <vue-button>center</vue-button>
                    <vue-button>right</vue-button>
                </button-group>
            </group>
            <group header="宽度自适应">
                <button-group blue justify>
                    <vue-button>left</vue-button>
                    <vue-button>center</vue-button>
                    <vue-button>right</vue-button>
                </button-group>
            </group>
            <group header="垂直叠堆">
                <button-group blue stacked>
                    <vue-button>left</vue-button>
                    <vue-button>center</vue-button>
                    <vue-button>right</vue-button>
                </button-group>
            </group>
            <group header="工具栏">
                <button-group toolbar>
                    <vue-button>left</vue-button>
                    <vue-button>center</vue-button>
                    <vue-button>right</vue-button>
                </button-group>
            </group>
            <h2>组合使用</h2>
            <group header="与 Icon 组合">
                    <vue-button><icon name="left-nav" titleRight="Default"></icon></vue-button>
                    <vue-button blue><icon name="right-nav" titleLeft="Primary"></icon></vue-button>
                    <vue-button sblue><icon name="search" titleLeft="Search"></icon></vue-button>
            </group>
        </div>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import * as vueBtn from 'components/button';
    export default {
        components: {
            ...Index,
            ...vueBtn
        }

    }
</script>

<style scoped>

</style>