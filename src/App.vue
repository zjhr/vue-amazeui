<template>
    <container fill direction="column" transition >
        <tabbar slot="tabbar" blue class="am-view-push" :style="{'transform':translate3d}">
            <tabbar-item href="/" icon="list" title="组件"></tabbar-item>
            <tabbar-item href="/About" badge="β" icon="info" title="关于" ></tabbar-item>
        </tabbar>
    </container>
</template>

<script>
    import container from 'components/container';
    import * as Tabbar from 'components/tabbar'
    export default {
        data() {
            return {
                transform: 0
            }
        },
        computed: {
            translate3d() {
                return `translate3d(${this.transform},0,0)`
            }
        },
        components: {
            container,
            ...Tabbar
        }
    }
</script>

<style scoped>
    .am-view-push {
        transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);
    }
</style>