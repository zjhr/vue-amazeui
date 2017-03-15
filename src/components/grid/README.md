# grid
---
>网格

# prop

## wrap
>type : Boolean, String
>>'wrap'换行, 'reverse'反转 wrap 排列,网格容器 flex-wrap 属性，是否换行，默认为 nowrap

## noCollapse
>type : Boolean
>>是否移除列默认的内边距（padding）

## avg
>type : Number, Boolean, String
>>平均分配单元格为 n 列。1~6

## align
>type : String, Boolean
>>行中列宽度总和不足 6 时的对齐方式,'right', 'center', 'between', 'around'

## bordered
>type : Boolean
>>网格是否显示边框，边框可用于制作九宫格效果。

# cell
---
>网格

# prop

## cells
>type : Number, Boolean, String
>>列宽所占的比例，1-6 的数字

## offset
>type : Number, Boolean, String
>>列偏移（与左边元素的外边距）的数量。1-6 的数字

## offset
>type : Number, Boolean, String
>>列是否自动收缩为内容宽度。

# 使用
><a>https://github.com/zjhr/vue-amazeui/blob/master/src/views/Grid.vue</a>

# 演示
><a>https://zjhr.github.io/vue-amazeui-demo/#/Grid</a>
