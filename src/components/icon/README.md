# icon
---
>图标

#prop

##iconClass
>type : String
>>用作icon上的class,一般用来自定义icon图标

##back
>type : Boolean
>>是否只是作用于回退

##titleLeft
>type : String
>>左文字

##titleRight
>type : String
>>右文字

##replace
>type : Boolean
>>是否清除历史

##elm
>type : String
>>组件使用的元素，默认为 span。

##href
>type : Boolean, String
>>如果设置 href 属性将忽略 elm 属性，渲染为 <a>

##name
>type : String
>> 图标名称。可填'back', 'bars', 'caret', 'check', 'close', 'code', <br>
>>'compose', 'download', 'edit', 'forward', 'gear', 'home', 'info',<br>
>>'list', 'more-vertical', 'more', 'pages', 'pause', 'person',<br>
>>'play', 'plus', 'refresh', 'search', 'share', 'sound', 'sound2', 'sound3', 'sound4',<br>
>>'star-filled', 'star', 'stop', 'trash', 'up-nav',<br>
>>'up', 'right-nav', 'right', 'down-nav', 'down', 'left-nav', 'left'<br>

#emit

##iconClick
>icon点击回调

#使用
><a>https://github.com/zjhr/vue-amazeui/blob/master/src/views/Icon.vue</a>

#演示
><a>https://zjhr.github.io/vue-amazeui-demo/#/Icon</a>
