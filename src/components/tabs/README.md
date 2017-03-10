# tabs
---
>选项卡组件父

#prop

##inset
>type : Boolean
>>加边距

##amSize
>type : String
>>tab尺寸。可选值：,'xs','sm','lg','xl',不设置则显示默认尺寸,tab默认sm

#v-model
>双向绑定选中tabs

# tabs-item
---
>选项卡组件子tab

#prop

##amStyle
>type : String
>>颜色，参数【blue，sblue，green，orange，red，black】

##blue
>type : Boolean
>>蓝色

##sblue
>type : Boolean
>>浅蓝色

##green
>type : Boolean
>>绿色

##orange
>type : Boolean
>>橙色

##red
>type : Boolean
>>红色

##black
>type : Boolean
>>黑色

##hollow
>type : Boolean
>>是否应用「镂空」样式。

##disabled
>type : Boolean
>>是否应用「禁止」样式。

#emit

##tabsItemClick
>点击时候的回调

# tabs-desc
---
>选项卡组件子内容

#slot
>自定义



#使用
><a>https://github.com/zjhr/vue-amazeui/blob/master/src/views/Tabs.vue</a>

#演示
><a>https://zjhr.github.io/vue-amazeui-demo/#/Tabs</a>
