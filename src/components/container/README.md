# container
---
>容器组件

#prop

##elm
>type : String
>>容器元素，默认为 div。

##fill
>type : Boolean
>>是否填充父容器可用高度（应用 height: 100%）样式。

##direction
>type : String
>>Flex box 方向，设置该属性后，容器会应用 display: flex 样式。两种，column：垂直，row:水平

##scrollable
>type : Boolean
>>内容超出容器时是否显示滚动条。

##transition
>type : Boolean, String
>>当类型为Boolean=true时候，使用动画，String时候自定义动画

##mode
>type : String
>>动画类型in-out,out-in

#emit

##afterEnter
>过度完成后回调

##enter
>过度开始时回调

#router-view
#slot
>自定义
#slot.header
>一般<navbar></navbar>
#slot.tabbar
>一般<tabbar></tabbar>

#使用
><a>https://github.com/zjhr/vue-amazeui/blob/master/src/App.vue</a>

#演示
><a>https://zjhr.github.io/vue-amazeui-demo/</a>
