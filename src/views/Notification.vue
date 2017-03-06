<template>
    <vueview>
        <navbar slot="header" blue>
            Notification
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <group header="交互显示">
            <field label="选择通知栏颜色">
                <field-input v-model="msg">
                    <option value="">Default</option>
                    <option value="blue">Primary</option>
                    <option value="sblue">Secondary</option>
                    <option value="green">Success</option>
                    <option value="orange">Warning</option>
                    <option value="red">Alert</option>
                </field-input>
            </field>
            <vue-button blue :disabled="open" @buttonClick="notificationOpen">显示通知栏</vue-button>
            <vue-button red :disabled="!open" @buttonClick="notificationClose">关闭通知栏</vue-button>
            <notification :amStyle="msg" :open="open" title="测试标题" @Close="notificationClose">
                这是一个动态显示的通知 :)
            </notification>
        </group>
        <group header="静态通知栏样式展示">
            <notification static>这是一个动态显示的通知 :) </notification>
            <notification blue static>这是一个动态显示的通知 :) </notification>
            <notification sblue static>这是一个动态显示的通知 :) </notification>
            <notification green static>这是一个动态显示的通知 :) </notification>
            <notification orange static>这是一个动态显示的通知 :) </notification>
            <notification red static>这是一个动态显示的通知 :) </notification>
        </group>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import * as Button from 'components/button';
    import * as Form from 'components/form';
    import Notification from 'components/notification';
    export default {
        data() {
            return {
                msg: '',
                open: false
            }
        },
        methods: {
            notificationOpen() {
                this.open = true
            },
            notificationClose() {
                this.open = false
            }
        },
        components: {
            Notification,
            ...Index,
            ...Button,
            ...Form
        }

    }
</script>

<style scoped>

</style>