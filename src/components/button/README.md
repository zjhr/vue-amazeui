# vue-button
---
>按钮组件

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

##rounded
>type : Boolean
>>渲染为圆角微章

##elm
>type : String
>>渲染标签元素，默认button，参数为正确的标签名

##href
>type : String
>>渲染为a标签

##target
>type : Boolean,String
>>渲染为a标签时候的打开链接类型

##amSize
>type : String
>>按钮尺寸。可选值：,'xs','sm','lg','xl',不设置则显示默认尺寸。

##hollow
>type : Boolean
>>是否应用「镂空」样式。

##block
>type : Boolean
>>是否应用块级样式。

##active
>type : Boolean
>>是否应用「激活」样式。

##disabled
>type : Boolean
>>是否应用「禁止」样式。

#emit

##buttonClick
>按钮点击回调，参数event

#slot
>自定义

#button-group
---
>按钮组组件

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

##toolbar
>type : Boolean
>>是否使用工具栏形式,用于放置 <vue-button>，创建按钮工具拦效果。

##hollow
>type : Boolean
>>是否应用「镂空」样式。该属性会传递到子 <vue-button> 组件上，子 <vue-button> 组件不用再设置。

##justify
>type : Boolean
>>按钮组宽度是否适应容器宽度。

##stacked
>type : Boolean
>>按钮是否垂直堆叠排列。

##amSize
>type : Boolean
>>按钮组尺寸。可选值：,'xs','sm','lg','xl',不设置则显示默认尺寸。

#slot
><vue-button></vue-button>

#使用
><a>https://github.com/zjhr/vue-amazeui/blob/master/src/views/Button.vue</a>

#演示
><a>https://zjhr.github.io/vue-amazeui-demo/#/Button</a>
