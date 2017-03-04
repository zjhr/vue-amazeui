<template>
    <vueview>
        <navbar slot="header" blue>
            Loader
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <group header="Loader 演示">
            <div :style="objectStyle">
                <loader :amStyle="amStyle" :rounded="rounded"></loader>
            </div>
            <hr>
            <field label="颜色">
                <field-input v-model="amStyle" :options="options"></field-input>
            </field>
            <list>
                <list-item nested="input" title="形状">
                    <vue-switch v-model="rounded" slot="after"></vue-switch>
                </list-item>
            </list>
        </group>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import loader from 'components/loader';
    import * as form from 'components/form';
    import vueSwitch from 'components/vueSwitch';
    import * as List from 'components/list';
    export default {
        data() {
            return {
                amStyle: '',
                rounded: false,
                options: [{
                    text: 'default',
                    value: ''
                }, {
                    text: 'primary',
                    value: 'blue',
                    selected: true
                }, {
                    text: 'secondary',
                    value: 'sblue'
                }, {
                    text: 'success',
                    value: 'green'
                }, {
                    text: 'warning',
                    value: 'orange'
                }, {
                    text: 'alert',
                    value: 'red'
                }, {
                    text: 'dark',
                    value: 'black'
                }, {
                    text: 'white',
                    value: 'white'
                }]
            }
        },
        computed: {
            objectStyle() {
                if (this.amStyle === 'white') {
                    return {
                        display: 'block',
                        background: 'rgb(14, 144, 210)'
                    }
                }
            }
        },
        components: {
            ...Index,
            loader,
            ...form,
            vueSwitch,
            ...List
        }

    }
</script>

<style scoped>

</style>