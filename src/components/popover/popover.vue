<template>
    <div class="__overlay-portal">
        <transition>
            <div v-show="open" class="popover" :class="popoverClass" :style="elStyle">
                <div class="popover-inner"><slot></slot></div>
                <div class="popover-angle" :class="popoverAngleClass" :style="angleLeftStyle"></div>
            </div>
        </transition>
        <transition>
            <div v-show="open" class="modal-backdrop" @click="popoverCloseFun" @touchmove.stop></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'popover',
        props: {
            direction: { //指定方向 left，top，right，bottom
                type: [String, Boolean],
                default: false
            },
            open: Boolean, //打开popover
            trigger: Element //需要绑定的dom
        },
        data() {
            return {
                elleft: 0,
                eltop: 0,
                angleLeft: 0,
                angleTop: 0,
                angleStr: ''
            }
        },
        methods: {
            elleftAngleLeftFun({
                left,
                width,
                outerWidth,
                childWidth
            }) {
                let posLeft = left - ((childWidth - width) / 2)
                let elleft = (() => {
                    if (posLeft < 0) {
                        return 5
                    } else if (posLeft > outerWidth - childWidth) {
                        return outerWidth - childWidth - 5
                    }
                    return posLeft
                })()
                let angleLeft = Math.abs(left - elleft + width / 2)
                return {
                    elleft,
                    angleLeft
                }
            },
            popoverCloseFun() {
                this.$emit('Close')
            },
            getAnchorPositionFun(el) {
                const rect = el.getBoundingClientRect()
                const a = {
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height
                }
                a.childHeight = this.$el.children[0].offsetHeight
                a.childWidth = this.$el.children[0].offsetWidth
                a.outerWidth = window.outerWidth
                a.outerHeight = window.outerHeight
                const {
                    elleft,
                    angleLeft
                } = this.elleftAngleLeftFun(a)
                a.elleft = elleft
                a.angleLeft = angleLeft
                return a
            },
            popoverTopFun({
                childHeight,
                top,
                elleft,
                angleLeft
            }) {
                this.angleTop = childHeight - 10
                this.eltop = top - (childHeight + 10)
                this.elleft = elleft
                this.angleLeft = angleLeft
                this.angleStr = 'bottom'
            },
            popoverRightFun({
                childHeight,
                height,
                left,
                width,
                top
            }) {
                this.angleLeft = 0
                this.angleTop = childHeight / 2 - 10
                this.eltop = top - ((childHeight - height) / 2)
                this.elleft = left + width + 10
                this.angleStr = 'left'
            },
            popoverBottomFun({
                top,
                height,
                elleft,
                angleLeft
            }) {
                this.angleTop = 0
                this.eltop = top + height + 10
                this.elleft = elleft
                this.angleLeft = angleLeft
                this.angleStr = 'top'
            },
            popoverLeftFun({
                childWidth,
                childHeight,
                top,
                height,
                left
            }) {
                this.angleLeft = childWidth - 10
                this.angleTop = childHeight / 2 - 10
                this.eltop = top - ((childHeight - height) / 2)
                this.elleft = left - (childWidth + 10)
                this.angleStr = 'right'
            },
            anchorPositionFun(el) {
                const tail = this.getAnchorPositionFun(el)
                const {
                    top,
                    left,
                    width,
                    height,
                    childHeight,
                    childWidth,
                    outerWidth,
                    outerHeight
                } = tail
                if (!this.direction) {
                    if (childHeight < top) {
                        this.popoverTopFun(tail)
                    } else if (childHeight > top &&
                        outerWidth - (left + width + 10) > childWidth) {
                        this.popoverRightFun(tail)
                    } else if (outerWidth - (left + width + 10) < childWidth &&
                        outerHeight - (top + height + 10) > childHeight) {
                        this.popoverBottomFun(tail)
                    } else {
                        this.popoverLeftFun(tail)
                    }
                } else {
                    if (this.direction === 'top') {
                        this.popoverTopFun(tail)
                    } else if (this.direction === 'right') {
                        this.popoverRightFun(tail)
                    } else if (this.direction === 'bottom') {
                        this.popoverBottomFun(tail)
                    } else {
                        this.popoverLeftFun(tail)
                    }
                }
            }
        },
        computed: {
            elStyle() {
                return {
                    left: this.elleft + 'px',
                    top: this.eltop + 'px'
                }
            },
            angleLeftStyle() {
                return {
                    left: this.angleLeft + 'px',
                    top: this.angleTop + 'px'
                }
            },
            popoverClass() {
                return {
                    [`popover-${this.direction}`]: this.direction
                }
            },
            popoverAngleClass() {
                return {
                    [`popover-angle-${this.angleStr}`]: this.angleStr
                }
            }
        },
        watch: {
            open(val) {
                if (!val) return
                this.$nextTick(() => {
                    this.anchorPositionFun(this.trigger)
                    this.$emit('Open')
                })
            }
        }

    }
</script>

<style scoped>
    .v-enter {
        -webkit-animation-name: amt-slide-top-fixed;
        animation-name: amt-slide-top-fixed;
    }
    
    .v-leave-active {
        -webkit-animation-name: amt-popover-out;
        animation-name: amt-popover-out;
    }
</style>