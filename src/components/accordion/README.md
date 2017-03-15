# accordion
---
>风琴式菜单组件

# prop

## inset
>type : Boolean
>>是否添加边距。默认为全宽填满容器，设置 inset 属性以后添加 15px 的边距

## behavior
>type : Boolean
>>是否手风琴式,默认手风琴

## noAnimated
>type : Boolean
>>是否关闭动画

# slot
><accordion-item></accordion-item>

# accordion-item
---
>风琴式菜单子类组件

# prop

## title
>type : String
>>手风琴标题

## active
>type : Boolean
>>是否展开当前的手风琴

# emit

## openAccordion
>展开时候的回调，参数event

# slot
>自定义

# 使用
><a>https://github.com/zjhr/vue-amazeui/blob/master/src/views/Accordion.vue</a>

# 演示
><a>https://zjhr.github.io/vue-amazeui-demo/#/Accordion</a>
