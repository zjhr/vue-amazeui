<template>
    <transition enter-class="modal-transition-appear" leave-active-class="modal-out">
        <div class="modal-actions">
            <div class="modal-actions-group">
                <ul class="list">
                    <li v-for="(item,index) in menus" class="item" 
                    :class="{'modal-actions-header':item.type==='header','modal-actions-alert':item.type==='alert'}"
                    @click="actionsItemFun($event,item.label)">
                        <div class="item-main" v-html="item.value || ''"></div>
                    </li>
                </ul>
            </div>
            <div v-if="!noShowCancel" class="modal-actions-group">
                <button class="btn btn-secondary btn-block" @click="actionsCancelFun">{{cancelText || '取消'}}</button>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'actions',
        props: {
            //actions列表数据[{value:xxxx,type:xxx,label:xxx}],
            //value:为值，可以是html
            //type:类型【header,alert】特殊
            //label:绑定事件名，默认actionsClick事件
            menus: Array,
            noShowCancel: Boolean, //是否隐藏取消，默认显示
            cancelText: String //取消按钮的文字，默认为“取消”
        },
        methods: {
            actionsItemFun(e, label) {
                this.$emit('actionsClick', e, label)
            },
            actionsCancelFun(e) {
                this.$emit('actionsCancel', e)
            }
        }

    }
</script>

<style scoped>
    .v-enter-active {
        -webkit-transition: -webkit-transform 0.3s linear;
        transition: -webkit-transform 0.3s linear;
        transition: transform 0.3s linear;
        transition: transform 0.3s linear, -webkit-transform 0.3s linear;
    }
</style>