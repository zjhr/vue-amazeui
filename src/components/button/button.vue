<script>
    import color from '../internal/color';
    export default {
        name: 'vue-button',
        mixins: [color],
        props: {
            elm: { //组件使用的元素，默认为 button。
                type: String,
                default: "button"
            },
            href: { //如果设置 href，则渲染为 <a>。
                type: [Boolean, String],
                default: false
            },
            target: { //设置为 href 以后可以设置链接打开方式。
                type: [Boolean, String],
                default: false
            },
            amSize: String, //按钮尺寸。可选值：,'xs','sm','lg','xl',不设置则显示默认尺寸。
            hollow: Boolean, //是否应用「镂空」样式。
            block: Boolean, //是否应用块级样式。
            active: Boolean, //是否应用「激活」样式。
            disabled: Boolean //是否应用「禁止」样式。
        },
        data() {
            return {
                name: 'btn',
                pamSize: '',
                phollow: false
            }
        },
        methods: {
            buttonClickFun(e) {
                this.$emit('buttonClick', e)
            }
        },
        render(h) {
            return h(this.href ? 'a' : this.elm, {
                attrs: {
                    disabled: this.disabled,
                    target: this.target
                },
                class: [{
                    'btn': true,
                    'btn-block': this.block,
                    [`btn-${this.amSize || this.pamSize}`]: this.amSize || this.pamSize,
                    'disabled': this.disabled,
                    'active': this.active,
                    'btn-hollow': this.hollow || this.phollow
                }, this.objectClass],
                on: {
                    click: this.buttonClickFun //按钮触发事件
                }
            }, this.$slots.default)
        }

    }

</script>

<style scoped>

</style>