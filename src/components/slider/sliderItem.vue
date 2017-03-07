<template>
    <transition :name="slider" @after-enter="enterAfter" @after-leave="leaveAfterFun">
        <li v-show="activeItem" :class="objectClass" :key="currentIndex">
            <slot></slot>
            <div v-if="title" class="slider-caption" v-text="title"></div>
        </li>
    </transition>
</template>

<script>
    export default {
        name: 'slider-item',
        props: {
            title: String,
            src: {
                type: [String, Boolean],
                default: false
            }//缩略图地址
        },
        data() {
            return {
                activeItem: false,
                slide: '',
                currentIndex: 0
            }
        },
        methods: {
            enterAfter(el) {
                this.$emit('onAction', this.currentIndex, this.slide)//幻灯片切换后的回调函数，第一个参数幻灯片编号，第二个参数为滚动方向。
            },
            leaveAfterFun(el) {
                this.$emit('onAction', this.currentIndex, this.slide)//幻灯片切换后的回调函数，第一个参数幻灯片编号，第二个参数为滚动方向。
            }
        },
        computed: {
            objectClass() {
                return {
                    'active': this.activeItem
                }
            },
            slider() {
                return `slider-${this.slide}`
            }
        }
    }

</script>

<style scoped>
    .slider-slides>li {
        display: block;
        white-space: nowrap;
    }
    
    .slider-slides>li.active.slider-left-enter,
    .slider-right-leave-to {
        transform: translate3d(100%, 0, 0)
    }
    
    .slider-slides>li.active.slider-left-enter-active.slider-left-enter-to,
    .slider-left-leave,
    .slider-slides>li.active.slider-right-enter-active.slider-right-enter-to,
    .slider-right-leave {
        transform: translate3d(0, 0, 0)
    }
    
    .slider-left-leave,
    .slider-left-leave-to,
    .slider-right-leave,
    .slider-right-leave-to {
        position: absolute;
        top: 0;
    }
    
    .slider-slides>li.active.slider-right-enter,
    .slider-left-leave-to {
        transform: translate3d(-100%, 0, 0)
    }
</style>