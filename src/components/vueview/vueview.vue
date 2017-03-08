<template>
    <transition>
        <div class="view" :style="pushStyle" :class="objectClass">
            <slot name="header"></slot>
            <container v-if="$slots.default && !$slots.offcanvas" fill scrollable>
                <slot></slot>
            </container>
            <slot v-if="$slots.offcanvas"></slot>
            <slot v-if="$slots.offcanvas" name="offcanvas"></slot>
        </div>
    </transition>
</template>

<script>
    import Container from '../container';
    export default {
        name: 'vue-view',
        props: { //配备offcanvas使用push滑动
            pLeft: { //push形式左侧滑
                type: Boolean,
                default: false
            },
            pRight: { //push形式右侧滑
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                translate: 'translate3d(0, 0, 0)'
            }
        },
        computed: {
            objectClass() {
                return {
                    'am-view-push': this.$vnode.data.slot == 'offcanvas'
                }
            },
            pushStyle: {
                get() {
                    if (this.$vnode.data.slot == 'offcanvas') {
                        return {
                            'transform': this.translate
                        }
                    }
                },
                set(newValue) {
                    this.translate = `translate3d(${newValue},0,0)`
                }
            }
        },
        methods: {
            sildeOffcanvasStart(isr) {
                let _isr = isr ? '-' : '';
                this.$parent.$slots.offcanvas.forEach((n, i) => {
                    let _propsData = n.componentOptions.propsData;
                    if (!_propsData.silde && isr || _propsData.silde === 'right' && !isr ||
                        _propsData.silde === "top" || _propsData.silde === "bottom") return false;
                    if (_propsData.open) {
                        this.pushStyle = _isr + n.elm.firstElementChild.style.width
                    }
                })
            },
            sildeOffcanvasEnd() {
                this.pushStyle = 0
            }
        },
        watch: {
            pLeft(val, oldval) {
                this.$nextTick(() => {
                    if (val === true) {
                        this.sildeOffcanvasStart()
                    } else {
                        this.sildeOffcanvasEnd()
                    }
                })
            },
            pRight(val, oldval) {
                this.$nextTick(() => {
                    if (val === true) {
                        this.sildeOffcanvasStart(true)
                    } else {
                        this.sildeOffcanvasEnd()
                    }
                })
            }
        },
        components: {
            Container
        }
    }

</script>

<style scoped>
    .am-view-push {
        transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);
    }
</style>