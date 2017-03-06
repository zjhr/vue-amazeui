<template>
    <div class="__notification-portal">
        <div>
            <transition :name="!noAnimated?'notification':''">
                <div v-show="open || static" class="notification" :class="[{'notification-animated':!static},objectClass]">
                    <div class="notification-content">
                        <h3 v-if="title" class="notification-title" v-text="title"></h3>
                        <slot></slot>
                    </div>
                    <span v-if="!closeBtn" class="icon icon-close notification-icon" @click="notificationCloseFun"></span>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import color from '../internal/color';
    export default {
        name: 'notification',
        mixins: [color],
        props: {
            title: String,
            closeBtn: Boolean, //是否不显示关闭按钮，默认为 false
            noAnimated: Boolean, //不显示动画
            open: Boolean, //通知栏是否可见，使用时为 true 打开通知，否则关闭。
            static: Boolean //是否渲染为静态的通知栏。
        },
        data() {
            return {
                name: "notification"
            }
        },
        methods: {
            notificationCloseFun(e) { //关闭触发回调
                this.$emit('Close', e)
            }
        }
    }

</script>

<style scoped>
    .notification-leave-active {
        -webkit-animation: amt-notification-leave .3s ease-in-out;
        animation: amt-notification-leave .3s ease-in-out;
    }
</style>