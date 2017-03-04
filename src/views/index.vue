<template>
    <vueview>
        <navbar slot="header" blue>vue-amazeui</navbar>
        <group header="vue-amazeui Components" noPadded>
            <list>
                <list-item v-for="(item,index) in items"
                :href="'/'+item" :title="item"></list-item>
            </list>
        </group>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import * as List from 'components/list'
    export default {
        data() {
            return {
                items: ['Accordion', 'Badge', 'Button', 'Card', 'Form',
                    'Grid', 'Icon', 'List', 'Loader', 'Modal', 'Navbar', 'Notification',
                    'OffCanvas', 'Popover', 'Slider', 'TabBar', 'Tabs', 'Typography'
                ]
            }
        },
        components: {
            ...Index,
            ...List
        }
    }
</script>

<style scoped>

</style>