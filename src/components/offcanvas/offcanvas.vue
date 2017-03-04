<template>
    <div rel="offcanvas">
        <transition :name="offcanvasSilde" @enter="enter">
        <div v-show="open" class="offcanvas" :style="objectStyle">
            <slot></slot>
        </div>
        </transition>
        <transition name="fade">
            <div v-show="open" class="modal-backdrop" @click="offcanvasClose" @touchmove.stop></div>
        </transition>  
    </div>
</template>

<script>
    export default {
        name: 'offcanvas',
        props: {
            open: { //是否打开
                type: Boolean
            },
            silde: { //滑出方向 默认为左侧滑出，left,right,top,bottom
                type: String,
                default: 'left'
            },
            sildewh: { //offcanvas的宽度，left,right为宽度,top,bottom为高度
                type: String,
                default: '70%'
            }
        },
        methods: {
            isTB(str) {
                if (this.silde === 'top' || this.silde === 'bottom') {
                    return str
                }
                return false
            },
            offcanvasClose(e) {
                this.$emit('Close', e)
            },
            enter(el, done) {
                this.$emit('onOpen', el) //侧边栏打开时的回调函数
            },
            afterLeave(el, done) {
                this.$emit('onClosed', el) //侧边栏关闭以后的回调函数。
            }
        },
        computed: {
            objectStyle() {
                return {
                    "width": this.isTB('100%') || this.sildewh || '70%',
                    'height': this.isTB('auto'),
                    "top": this.silde === 'top' ? (this.sildewh || '70%') : false,
                    'bottom': this.silde === 'bottom' ? (this.sildewh || '70%') : false,
                    "right": this.silde === 'right' ? "0" : false
                }
            },
            offcanvasSilde() {
                return `am-silde-${this.silde}`
            }
        }

    }
</script>

<style scoped>
    /*遮罩动画*/
    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1)
    }
    
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
    /*滑出*/
    
    .am-silde-left-leave,
    .am-silde-right-leave {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    /*左侧滑出*/
    
    .am-silde-left-leave-active,
    .am-silde-left-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    /*右侧滑出*/
    
    .am-silde-right-leave-active,
    .am-silde-right-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    /*向上滑出*/
    
    .am-silde-top-enter,
    .am-silde-top-leave-active {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    
    .am-silde-top-leave {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    /*向下滑出*/
    
    .am-silde-bottom-enter,
    .am-silde-bottom-leave-active {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
    
    .am-silde-bottom-leave {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    
    .am-silde-left-enter-active,
    .am-silde-left-leave-active,
    .am-silde-right-enter-active,
    .am-silde-right-leave-active,
    .am-silde-top-enter-active,
    .am-silde-top-leave-active,
    .am-silde-bottom-enter-active,
    .am-silde-bottom-leave-active {
        transition: all .5s cubic-bezier(0.23, 1, 0.320, 1);
    }
</style>