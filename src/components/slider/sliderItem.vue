<template>
    <li :class="objectClass" :key="currentIndex">
        <slot></slot>
        <div v-if="title" class="slider-caption" v-text="title"></div>
    </li>
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
                currentIndex: 0,
                enter: false,
                leave: false
            }
        },
        computed: {
            objectClass() {
                return {
                    'active': this.activeItem,
                    [`slider-${this.slide}-enter`]: this.enter,
                    [`slider-${this.slide}-leave`]: this.leave
                }
            }
        },
        watch: {
            enter(val, oldval) {
                if (!val) return
                setTimeout(() => {
                    this.$parent.$parent.enterAfterFun(this.currentIndex, this.slide)
                    this.enter = false
                }, 500)
            },
            leave(val, oldval) {
                if (!val) return
                setTimeout(() => {
                    this.$parent.$parent.leaveAfterFun(this.currentIndex, this.slide)
                    this.leave = false
                }, 500)
            }
        }
    }

</script>

<style scoped>
    .slider-left-enter {
        animation: sliderleftenter .5s ease forwards
    }
    
    .slider-left-leave {
        animation: sliderleftleave .5s ease forwards
    }
    
    .slider-right-enter {
        animation: sliderrightenter .5s ease forwards
    }
    
    .slider-right-leave {
        animation: sliderrightleave .5s ease forwards
    }
    
    @keyframes sliderrightleave {
        0% {
            transform: translate3d(0, 0, 0)
        }
        100% {
            position: absolute;
            top: 0;
            transform: translate3d(100%, 0, 0)
        }
    }
    
    @keyframes sliderrightenter {
        0% {
            position: absolute;
            top: 0;
            transform: translate3d(-100%, 0, 0)
        }
        100% {
            transform: translate3d(0, 0, 0)
        }
    }
    
    @keyframes sliderleftenter {
        0% {
            position: absolute;
            top: 0;
            transform: translate3d(100%, 0, 0)
        }
        100% {
            transform: translate3d(0, 0, 0)
        }
    }
    
    @keyframes sliderleftleave {
        0% {
            transform: translate3d(0, 0, 0)
        }
        100% {
            position: absolute;
            top: 0;
            transform: translate3d(-100%, 0, 0)
        }
    }
</style>