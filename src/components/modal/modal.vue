<template>
  <div rel="modal">
    <div v-if="role==='popup'">
      <popup v-show="isOpen" :title="title" @popupClose="modalCloseFun">
        <slot></slot>
      </popup>
    </div>
    <div v-else-if="role==='actions'">
      <actions v-show="isOpen" :menus="menus" :noShowCancel="noShowCancel" :cancelText="cancelText" @actionsClick="actionsClickFun"
        @actionsCancel="modalCloseFun"></actions>
    </div>
    <div v-else class="modal">
      <transition name="modal-fade">
        <div v-show="isOpen" class="modal-inner">
          <div class="modal-dialog">
            <div class="modal-header">
              <slot name="header"></slot>
              <h4 v-if="title" class="modal-title">{{title}}</h4>
              <span v-if="role==='' && !closeBtn" class="icon icon-close modal-icon" @click="modalCloseFun"></span>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div v-if="role==='alert' || role==='confirm' || $slots.footer" class="modal-footer">
              <slot name="footer"></slot>
              <span v-if="role==='confirm'" class="modal-btn" @click="modalCloseFun">{{cancelText || '取消'}}</span>
              <span v-if="role==='confirm'" class="modal-btn" @click="modalConfirm">{{confirmText || '确定'}}</span>
              <span v-if="role==='alert'" class="modal-btn" @click="modalCloseFun">{{confirmText || '确定'}}</span>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <transition>
      <div v-show="isOpen" class="modal-backdrop active" @click="!!closeFromBack && modalCloseFun()"></div>
    </transition>
  </div>
</template>

<script>
  import Actions from './actions';
  import Popup from './popup';
  export default {
    name: 'modal',
    props: {
      //actions列表数据[{value:xxxx,type:xxx,label:xxx}],
      //value:为值，可以是html
      //type:类型【header,alert】特殊
      //label:绑定事件名，默认actionsClick事件
      menus: Array,
      noShowCancel: Boolean, //actions是否隐藏取消，默认显示
      role: {
        type: String,
        default: ''
      }, //modal类型'alert', 'confirm', 'actions', 'popup'
      title: String, //标题
      isOpen: Boolean, //是否打开
      closeBtn: Boolean, //是否显示关闭按钮
      confirmText: String, //确定按钮文字，默认为“确定”
      cancelText: String, //关闭按钮文字，默认为“确定”
      closeFromBack: Boolean //点击遮罩层是否关闭 Moda
    },
    methods: {
      modalCloseFun(e) {
        this.$emit('Close', e)
      },
      modalConfirm(e) {
        this.$emit('Confirm', e)
      },
      actionsClickFun(e, label) { //actions的列表点击响应事件
        if (label) {
          this.$emit(label, e)
        } else {
          this.$emit('actionsClick', e)
        }
      }
    },
    components: {
      Actions,
      Popup
    }

  }

</script>

<style scoped>
  .modal-fade-enter-active {
    -webkit-animation: amt-modal-in 0.3s ease-out;
    animation: amt-modal-in 0.3s ease-out;
  }

  .modal-fade-leave-active {
    -webkit-animation: amt-modal-out 0.3s ease-out;
    animation: amt-modal-out 0.3s ease-out;
  }

</style>
