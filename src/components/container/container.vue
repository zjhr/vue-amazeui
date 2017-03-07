<script>
  export default {
    name: 'container',
    props: {
      elm: { //容器元素，默认为 div。
        type: String,
        default: 'div'
      },
      fill: Boolean, //是否填充父容器可用高度（应用 height: 100%）样式。
      direction: String,
      //Flex box 方向，设置该属性后，容器会应用 display: flex 样式。
      //两种，column：垂直，row:水平
      scrollable: Boolean, //内容超出容器时是否显示滚动条。
      //转场动画名称，如不设置则没有转场动画。
      transition: { //当类型为Boolean=true时候，使用动画，String时候自定义动画
        type: [Boolean, String],
        default: false
      },
      mode: String //动画类型in-out,out-in
    },
    data() {
      return {
        slide: ''
      }
    },
    watch: {
      '$route'(to, from) {
        let toDepth = to.path.split('/')[1] == "" ? 1 : to.path.split('/').length
        let fromDepth = from.path.split('/').length
        if (toDepth === fromDepth) {
          toDepth = to.path.length
          fromDepth = from.path.length
        }
        this.slide = (() => {
          if (this.transition !== '') {
            if (toDepth < fromDepth) {
              return `${this.transition}-right` //回退动画
            }
            return `${this.transition}-left` //前进动画
          }
          if (toDepth < fromDepth) {
            return 'slide-right' //回退动画
          }
          return 'slide-left' //前进动画
        })()
      }
    },
    methods: {
      afterEnterFun() {
        this.$emit('afterEnter')
      },
      enterFun() {
        this.$emit('enter')
      }
    },
    render(h) {
      const transition = h('transition', {
        props: {
          name: this.slide,
          mode: this.mode
        },
        on: {
          'after-enter': this.afterEnterFun,
          'enter': this.enterFun
        }
      }, [h('router-view')])
      let child = this.transition === '' ? [transition] : [h('router-view')];
      const views = h('div', {
        class: {
          'views': true
        }
      }, child)
      const viewsSlots = (val) => {
        return [val, this.$slots.header, this.$slots.tabbar]
      }
      let child1 = !this.$slots.default ? viewsSlots(views) : viewsSlots(this.$slots.default);
      return h(this.elm, {
        class: {
          'container': true,
          'container-fill': this.fill, ['container-' + this.direction]: this.direction,
          'container-scrollable': this.scrollable
        }
      }, child1)
    }
  }

</script>
<style scoped>
  /*元素插入后执行动画*/
  
  .slide-left-enter {
    transform: translate3d(100%, 0, 0);
  }
  
  .slide-left-enter-to {
    transform: translate3d(0, 0, 0);
  }
  
  .slide-left-enter-active {
    transition: all .5s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 20
  }
  /*元素离开前执行动画*/
  
  .slide-left-leave {
    transform: translate3d(0, 0, 0);
  }
  
  .slide-left-leave-to {
    transform: translate3d(-100%, 0, 0);
    opacity: 0
  }
  
  .slide-left-leave-active {
    opacity: 1;
    transition: all 2s cubic-bezier(0.23, 1, 0.320, 1);
  }
  /*元素插入后执行动画*/
  
  .slide-right-enter {
    transform: translate3d(-100%, 0, 0);
  }
  
  .slide-right-enter-to {
    transform: translate3d(0, 0, 0);
  }
  
  .slide-right-enter-active {
    transition: all .5s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 20
  }
  /*元素离开前执行动画*/
  
  .slide-right-leave {
    transform: translate3d(0, 0, 0);
  }
  
  .slide-right-leave-to {
    transform: translate3d(100%, 0, 0);
    opacity: 0
  }
  
  .slide-right-leave-active {
    transition: all 3s cubic-bezier(0.23, 1, 0.320, 1);
    opacity: 1
  }
</style>