<template>
  <vueview>
    <vueview slot="offcanvas">
      <navbar slot="header" blue>
        Navbar
        <icon name="left-nav" slot="left" titleRight="返回" back></icon>
      </navbar>
      <group header="颜色样式">
        <navbar>
          Navbar
          <icon name="left-nav" slot="left" titleRight="left" href></icon>
          <icon name="right-nav" slot="right" titleLeft="right" href></icon>
        </navbar>
        <br>
        <navbar blue>
          Navbar
          <icon name="left-nav" slot="left" titleRight="left" href></icon>
          <icon name="right-nav" slot="right" titleLeft="right" href></icon>
        </navbar>
        <br>
        <navbar sblue>
          Navbar
          <icon name="left-nav" slot="left" titleRight="left" href></icon>
          <icon name="right-nav" slot="right" titleLeft="right" href></icon>
        </navbar>
        <br>
        <navbar green>
          Navbar
          <icon name="left-nav" slot="left" titleRight="left" href></icon>
          <icon name="right-nav" slot="right" titleLeft="right" href></icon>
        </navbar>
        <br>
        <navbar orange>
          Navbar
          <icon name="left-nav" slot="left" titleRight="left" href></icon>
          <icon name="right-nav" slot="right" titleLeft="right" href></icon>
        </navbar>
        <br>
        <navbar red>
          Navbar
          <icon name="left-nav" slot="left" titleRight="left" href></icon>
          <icon name="right-nav" slot="right" titleLeft="right" href></icon>
        </navbar>
        <br>
        <navbar black>
          Navbar
          <icon name="left-nav" slot="left" titleRight="left" href></icon>
          <icon name="right-nav" slot="right" titleLeft="right" href></icon>
        </navbar>
      </group>
      <group header="图标">
        <navbar>
          Navbar
          <icon name="left-nav" slot="left" titleRight="left" href></icon>
          <icon name="bars" slot="right" href></icon>
        </navbar>
      </group>
      <group header="多链接">
        <navbar>
          Navbar
          <icon slot="right" href>Right</icon>
          <icon slot="right" href>Right</icon>
        </navbar>
      </group>
      <group header="标题居左">
        <navbar titleOnLeft>
          Navbar
          <icon slot="right" href>Right</icon>
          <icon slot="right" href>Right</icon>
        </navbar>
      </group>
      <group header="offCanvas">
        <navbar blue>
          Navbar
          <icon name="bars" slot="right" titleLeft="Menu" href @iconClick="open"></icon>
        </navbar>
      </group>
    </vueview>
    <offcanvas slot="offcanvas" :open="offcanvas" @Close="close">
      <p>OffCanvas 内容</p>
    </offcanvas>
  </vueview>
</template>

<script>
  import Index from './index.js';
  import Offcanvas from 'components/offCanvas';
  export default {
    data() {
      return {
        offcanvas: false
      }
    },
    methods: {
      close() {
        this.offcanvas = false
      },
      open() {
        this.offcanvas = true
      }
    },
    components: {
      ...Index,
      Offcanvas
    }

  }

</script>

<style scoped>


</style>
