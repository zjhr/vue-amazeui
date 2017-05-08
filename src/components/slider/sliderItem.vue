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
      } //缩略图地址
    },
    data() {
      return {
        activeItem: false,
        nextItem: false,
        leftItem: false,
        prevItem: false,
        rightItem: false,
        slide: '',
        currentIndex: 0,
      }
    },
    computed: {
      objectClass() {
        return {
          'active': this.activeItem,
          'next': this.nextItem,
          'left': this.leftItem,
          'prev': this.prevItem,
          'right': this.rightItem
        }
      }
    },
    watch: {
      leftItem(val, oldval) {
        if (!val) return
        setTimeout(() => {
          this.$parent.$parent.enterAfterFun(this.currentIndex, this.slide)
          this.leftItem = false
        }, 500)
      },
      rightItem(val, oldval) {
        if (!val) return
        setTimeout(() => {
          this.$parent.$parent.leaveAfterFun(this.currentIndex, this.slide)
          this.rightItem = false
        }, 500)
      }
    }
  }

</script>
