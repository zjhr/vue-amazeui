<template>
    <dl class="accordion-item" :class="{'active':activeitem}">
        <dt class="accordion-title" @click="openAccordionFun">
            {{title}}
            <span class="icon icon-right-nav accordion-icon"></span>
        </dt>
        <transition @enter="enter" @leave="Leave">
            <dd v-show="activeitem" class="accordion-body" :class="{'collapsing':!noAnimated}" :style="{height:height}">
                <div class="accordion-content">
                    <slot></slot>
                </div>
            </dd>
        </transition>
    </dl>
</template>

<script>
    export default {
        name: 'accordion-item',
        props: {
            title: String,
            active: Boolean
        },
        mounted() {
            if (this.active) {
                this.height = 'auto'
                this.activeitem = true
            }
            if (this.$parent.noAnimated) this.noAnimated = true
        },
        data() {
            return {
                height: '0px',
                activeitem: false,
                noAnimated: false
            }
        },
        methods: {
            enter(el, done) {
                this.height = 'auto'
                this.height = el.scrollHeight + 'px'
                done()
            },
            Leave(el) {
                this.height = '0px'
            },
            openAccordionFun(e) {
                this.activeitem=!this.activeitem
                this.$parent.newopenitemnum = this.currentIndex
                this.$emit('openAccordion', e)
            }
        }
    }
</script>

<style scoped>
    .collapsing {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
</style>