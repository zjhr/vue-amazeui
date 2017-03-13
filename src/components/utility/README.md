# Utility
---
>常用样式 class 封装。

#布局相关

#.root
``` bash
.root {
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
```
#float
``` bash
.cf: 清除浮动
.fl: 向左浮动
.fr: 向右浮动
.fn: 不浮动
```
#边距

##类名命名规则：
``` bash
.{type}[-(v|h|top|right|bottom|left)][-0|xs|sm|lg|xl]
type：margin 或者 padding
[-(v|h|top|right|bottom|left)]：可选的方式
不加则为上右下左皆有，即 padding: value;/margin: value;
v 为垂直方向， h 为垂直方向
[-0|xs|sm|lg|xl]：值修饰符
不添加为 0.9375rem (15px)
0: 0
xs: 0.3125rem
sm: 0.625rem
lg: 1.25rem
xl: 2rem
示例：

margin: 外边距为 0.9375rem
margin-v: 垂直（上下）外边距为 0.9375rem
margin-v-xs: 垂直外边距为 0.3125rem
padding-left-0: 左内边距为 0
```
#文本

##单行文字截断
``` bash
.text-truncate: 需要添加 block 或 inline-block 样式。
```
##文本对齐
``` bash
.text-left: 左对齐
.text-center: 居中
.text-right: 右对齐
.text-justify: 两端对齐
```
##文本颜色
``` bash
.text-primary
.text-secondary
.text-success
.text-warning
.text-alert
```
