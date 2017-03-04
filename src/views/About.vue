<template>
    <vueview>
        <navbar slot="header" blue>
            About
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <group header="关于 vue-amazeui" footer="ver 1.0.0">
            <p>vue-amazeui 是基于Amaze UI Touch React.js 的移动端 Web 组件库样式基础上用Vue2.0.js来重构的移动端 Web 组件库。<br> PS：个人写来玩的，大概花了两个星期完工，可能会存在一些bug</p>
        </group>
        <group header="开发人员">
            <a href="https://github.com/zjhr" target="_black">@zjhr</a>
        </group>
        <group header="鸣谢">
            Amaze UI Touch开发者：<br>
            <a href="https://github.com/minwe" target="_blank">@minwe</a>，<a href="https://github.com/huangzhipeng" target="_blank">@huangzhipeng</a>
            <p> 感谢所有参与、关注 vue-amazeui 的用户。</p>
        </group>
        <group header="版权">
            MIT © 2015 - 2017 AllMobilize Inc.
        </group>
        <group header="UA">
            Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36
        </group>
    </vueview>
</template>

<script>
    import Index from './index.js';
    export default {
        components: {
            ...Index
        }

    }

</script>

<style scoped>

</style>