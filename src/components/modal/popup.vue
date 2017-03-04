<template>
    <transition enter-class="modal-transition-appear" leave-active-class="modal-out">
        <div role="popup" class="modal-popup popup">
            <div class="popup-inner">
                <div class="popup-header">
                    <h4 v-if="title" class="popup-title">{{title}}</h4>
                    <span class="icon icon-close popup-icon" @click="popupCloseFun"></span>
                </div>
                <div class="popup-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'popup',
        props: {
            title: String
        },
        methods: {
            popupCloseFun(e) {
                this.$emit('popupClose', e)
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