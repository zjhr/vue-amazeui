<script>
  import color from '../internal/color';
  export default {
    name: 'badge',
    mixins: [color],
    props: {
      elm: { //组件使用的元素，默认为 span。
        type: String,
        default: 'span'
      },
      target: { //设置为 href 以后可以设置链接打开方式。
        type: [Boolean, String],
        default: false
      },
      href: { //如果设置 href 属性将忽略 elm 属性，渲染为 <a>。
        type: [String, Boolean],
        default: false
      },
      rounded: Boolean //是否应用椭圆样式。
    },
    data() {
      return {
        name: "badge"
      }
    },
    render(h) {
      return h(this.href ? 'a' : this.elm, {
        attrs: {
          href: this.href,
          target: this.target
        },
        class: [{
          'badge': true,
          'badge-rounded': this.rounded
        }, this.objectClass]
      }, this.$slots.default)
    }

  }

</script>