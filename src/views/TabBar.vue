<template>
    <vueview>
        <navbar slot="header" blue>
            TabBar
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <group noPadded header="文字">
            <tabbar>
                <tabbar-item title="首页"></tabbar-item>
                <tabbar-item active title="设置"></tabbar-item>
                <tabbar-item title="关于"></tabbar-item>
            </tabbar>
        </group>
        
        <group noPadded header="图标">
            <tabbar>
                <tabbar-item active icon="home"></tabbar-item>
                <tabbar-item icon="gear"></tabbar-item>
                <tabbar-item icon="info"></tabbar-item>
            </tabbar>
        </group>

        <group noPadded header="图标 + Badge">
            <tabbar>
                <tabbar-item active icon="home"></tabbar-item>
                <tabbar-item icon="gear"></tabbar-item>
                <tabbar-item icon="info" badge="5"></tabbar-item>
            </tabbar>
        </group>

        <group noPadded header="图标 + 文字">
            <tabbar>
                <tabbar-item active icon="home" title="首页"></tabbar-item>
                <tabbar-item icon="gear" title="设置"></tabbar-item>
                <tabbar-item icon="info" badge="5" title="关于"></tabbar-item>
            </tabbar>
        </group>

        <group noPadded header="Primary">
            <tabbar blue>
                <tabbar-item active icon="home" title="首页"></tabbar-item>
                <tabbar-item icon="gear" title="设置"></tabbar-item>
                <tabbar-item icon="info" badge="5" title="关于"></tabbar-item>
            </tabbar>
        </group>
        
        <group noPadded header="Secondary">
            <tabbar sblue>
                <tabbar-item active icon="home" title="首页"></tabbar-item>
                <tabbar-item icon="gear" title="设置"></tabbar-item>
                <tabbar-item icon="info" badge="5" title="关于"></tabbar-item>
            </tabbar>
        </group>
        
        <group noPadded header="Success">
            <tabbar green>
                <tabbar-item active icon="home" title="首页"></tabbar-item>
                <tabbar-item icon="gear" title="设置"></tabbar-item>
                <tabbar-item icon="info" badge="5" title="关于"></tabbar-item>
            </tabbar>
        </group>
        <group noPadded header="Warning">
            <tabbar orange>
                <tabbar-item active icon="home" title="首页"></tabbar-item>
                <tabbar-item icon="gear" title="设置"></tabbar-item>
                <tabbar-item icon="info" badge="5" title="关于"></tabbar-item>
            </tabbar>
        </group>
        
        <group noPadded header="Alert">
            <tabbar red>
                <tabbar-item active icon="home" title="首页"></tabbar-item>
                <tabbar-item icon="gear" title="设置"></tabbar-item>
                <tabbar-item icon="info" badge="5" title="关于"></tabbar-item>
            </tabbar>
        </group>
        
        <group noPadded header="Dark">
            <tabbar black>
                <tabbar-item active icon="home" title="首页"></tabbar-item>
                <tabbar-item icon="gear" title="设置"></tabbar-item>
                <tabbar-item icon="info" badge="5" title="关于"></tabbar-item>
            </tabbar>
        </group>
        
        <group noPadded header="取消选中状态">
            <tabbar blue noActive>
                <tabbar-item icon="home" title="首页"></tabbar-item>
                <tabbar-item icon="gear" title="设置"></tabbar-item>
                <tabbar-item icon="info" badge="5" title="关于"></tabbar-item>
            </tabbar>
        </group>
    </vueview>
</template>

<script>
    import Index from './index.js'
    import * as Tabbar from 'components/tabbar'
    export default {
        components: {
            ...Index,
            ...Tabbar
        }

    }
</script>

<style scoped>

</style>