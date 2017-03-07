<template>
    <router-link :tag="href===''?'a':elm" :to="href===''|| !href? $route.path : href" :replace="replace" :class="navbarLinkClass"
        @click.native="handleClick">
        <span v-if="$slots.default" :class="navbarTitle"><slot></slot></span>
        <span v-if="titleLeft" :class="navbarTitle" v-text="titleLeft"></span>
        <span v-if="name" class="icon" :class="[objectClass,iconClass]"></span>
        <slot name="badge"></slot>
        <span v-if="titleRight" :class="navbarTitle" v-text="titleRight"></span>
        </router-link>
</template>

<script>
    export default {
        name: 'icon',
        props: {
            iconClass: String, //用作icon上的class
            back: Boolean, //是否只是作用于回退
            titleLeft: String, //左文字
            titleRight: String, //右文字
            replace: Boolean, //是否清除历史
            elm: { //组件使用的元素，默认为 span。
                type: String,
                default: 'span'
            },
            href: { //如果设置 href 属性将忽略 elm 属性，渲染为 <a>
                type: [Boolean, String],
                default: false
            },
            // 'back', 'bars', 'caret', 'check', 'close', 'code', 
            // 'compose', 'download', 'edit', 'forward', 'gear', 'home', 'info',
            //  'list', 'more-vertical', 'more', 'pages', 'pause', 'person',
            //  'play', 'plus', 'refresh', 'search', 'share', 'sound', 'sound2', 'sound3', 'sound4',
            //   'star-filled', 'star', 'stop', 'trash', 'up-nav',
            //  'up', 'right-nav', 'right', 'down-nav', 'down', 'left-nav', 'left'
            name: String //图标名称。
        },
        data() {
            return {
                navbarLink: false //是否存在于navbar
            }
        },
        methods: {
            handleClick(e) {
                this.$emit('iconClick', e) //icon点击后触发的函数iconClick
                if (this.back) {
                    this.$router.back()
                }
            }
        },
        mounted() {
            if (this.$parent.$refs.navbar) {
                this.navbarLink = true
            }
        },
        computed: {
            navbarLinkClass() {
                return {
                    'navbar-nav-item': this.navbarLink
                }
            },
            navbarTitle() {
                return {
                    'navbar-nav-title': this.navbarLink
                }
            },
            objectClass() {
                return {
                    ['icon-' + this.name]: this.name,
                    'navbar-icon': this.navbarLink,
                    'navbar-icon-sibling-of-title': this.navbarLink && (this.titleRight || this.titleLeft)
                }
            }
        }

    }

</script>