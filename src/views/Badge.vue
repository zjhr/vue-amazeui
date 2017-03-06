<template>
    <vueview>
        <navbar slot="header" blue>
            Badge
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <group header="默认形状">
            <badge>default</badge>
            <badge blue>primary</badge>
            <badge sblue>secondary</badge>
            <badge green>success</badge>
            <badge orange>warning</badge>
            <badge red>alert</badge>
            <badge black>dark</badge>
        </group>
        <group header="Rounded">
            <badge rounded>0</badge>
            <badge rounded blue>1</badge>
            <badge rounded sblue>2</badge>
            <badge rounded green>3</badge>
            <badge rounded orange>4</badge>
            <badge rounded red>5</badge>
            <badge rounded black>6</badge>
        </group>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import Badge from 'components/badge';
    export default {
        components: {
            ...Index,
            Badge
        }

    }
</script>

<style scoped>

</style>