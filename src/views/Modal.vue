<template>
  <vueview>
    <modal title="Modal 标题" :isOpen="open1" @Close="modalOutFun('open1')">Hello, Modal 内容</modal>
    <modal role="alert" title="vue-amazeui" :isOpen="open2" @Close="modalOutFun('open2')">这一个 Alert 窗口。</modal>
    <modal role="confirm" title="vue-amazeui" :isOpen="open2" @Close="modalOutFun('open2')" @Confirm="modalConfirm('open2')">这一个 Confirm 窗口。</modal>
    <modal role="confirm" title="vue-amazeui" :isOpen="open3" @Close="modalOutFun('open3')" @Confirm="modalConfirm('open3',msg)">
      输入你的 IQ 卡密码：
      <field-input v-model="msg" placeholder="把 IQ 卡密码交出来"></field-input>
    </modal>
    <modal role="confirm" title="Login" :isOpen="open4" @Close="modalOutFun('open4')">
      <form-group set>
        <field-input placeholder="Name."></field-input>
        <field-input placeholder="Password."></field-input>
      </form-group>
    </modal>
    <modal title="使劲加载中..." :isOpen="open5" closeFromBack closeBtn @Close="modalOutFun('open5')">
      <loader></loader>
    </modal>
    <modal :isOpen="open6" role="actions" @Close="modalOutFun('open6')" :menus="menus" @onHeader="headerFun"></modal>
    <modal title="爱过什么女爵的滋味" :isOpen="open7" role="popup" @Close="modalOutFun('open7')">
      <p>
        为你封了国境<br> 为你赦了罪
        <br> 为你撤了历史记载
        <br> 为你涂了装扮
        <br> 为你喝了醉
        <br> 为你建了城池围墙
        <br> 一颗热的心穿着冰冷外衣
        <br> 一张白的脸漆上多少褪色的情节
        <br> 在我的空虚身体里面
        <br> 爱上哪个肤浅的王位
        <br> 在你的空虚宝座里面
        <br> 爱过什麽女爵的滋味
        <br> 为你封了国境
      </p>
      <p>
        为你赦了罪<br> 为你撤了历史记载
        <br> 一颗热的心
        <br> 穿着冰冷外衣
        <br> 一张白的脸
        <br> 漆上多少褪色的情节
        <br> 在我的空虚身体里面
        <br> 爱上哪个肤浅的王位
        <br> 在你的空虚宝座里面
        <br> 爱过什麽女爵的滋味
        <br> 在我的空虚身体里面
        <br> 爱上哪个肤浅的王位
        <br> 在你的空虚宝座里面
        <br> 爱过什麽女爵的滋味
      </p>
    </modal>
    <modal title="Login" :isOpen="open8" @Close="modalOutFun('open8')">
      <list class="margin-v-sm">
        <list-item nested="input">
          <icon slot="img" name="person"></icon>
          <field-input placeholder="Username..."></field-input>
        </list-item>
        <list-item nested="input">
          <icon slot="img" name="info"></icon>
          <field-input type="password" placeholder="Password..."></field-input>
        </list-item>
      </list>
      <button-group justify>
        <vue-button>Cancel</vue-button>
        <vue-button blue>Login</vue-button>
      </button-group>
    </modal>
    <vueview slot="Modal">
      <navbar slot="header" blue>
        Modal
        <icon name="left-nav" slot="left" titleRight="返回" back></icon>
      </navbar>
      <group header="默认 Modal">
        <div>
          <vue-button blue @buttonClick="modalOpFun('open1')">普通 Modal</vue-button>
        </div>
      </group>
      <group header="Alert">
        <div>
          <vue-button blue @buttonClick="modalOpFun('open2')">Alert Modal</vue-button>
        </div>
      </group>
      <group header="Confirm">
        <div>
          <vue-button blue @buttonClick="modalOpFun('open2')">Confirm Modal</vue-button>
        </div>
      </group>
      <group header="Prompt">
        <div>
          <vue-button blue @buttonClick="modalOpFun('open3')">Prompt Modal</vue-button>
        </div>
      </group>
      <group header="多个输入框">
        <div>
          <vue-button blue @buttonClick="modalOpFun('open4')">Prompt Modal</vue-button>
        </div>
      </group>
      <group header="Loading">
        <div>
          <vue-button blue @buttonClick="modalOpFun('open5')">Loading Modal</vue-button>
        </div>
      </group>
      <group header="Actions">
        <div>
          <vue-button blue @buttonClick="modalOpFun('open6')">Actions Modal</vue-button>
        </div>
      </group>
      <group header="Popup">
        <div>
          <vue-button blue @buttonClick="modalOpFun('open7')">Popup Modal</vue-button>
        </div>
      </group>
      <group header="Login Modal">
        <div>
          <vue-button green @buttonClick="modalOpFun('open8')">Login</vue-button>
        </div>
      </group>
    </vueview>
  </vueview>
</template>

<script>
  import Index from './index.js';
  import * as Button from 'components/button';
  import * as Form from 'components/form';
  import * as List from 'components/list';
  import Modal from 'components/modal';
  import Loader from 'components/loader';
  export default {
    data() {
      return {
        msg: '',
        menus: [{
          value: '分享到',
          type: 'header',
          label: 'onHeader'
        }, {
          value: '微信'
        }, {
          value: 'Twitter',
          type: 'alert'
        }],
        open1: false,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
        open6: false,
        open7: false,
        open8: false
      }
    },
    methods: {
      modalOpFun(value) {
        this[value] = true
      },
      modalOutFun(value) {
        this[value] = false
      },
      modalConfirm(value, msg) {
        if (msg) {
          alert(`你输入的是：${msg}`)
        } else {
          alert('你点击了确定按钮')
        }
        this.modalOutFun(value)
      },
      headerFun() {
        alert('触发了自定义事件')
      }
    },
    components: {
      ...List,
      ...Index,
      ...Button,
      ...Form,
      Modal,
      Loader
    }

  }

</script>

<style scoped>


</style>
