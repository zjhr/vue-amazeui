# modal
---
>模态框

# prop

## role
>type : String
>>modal类型'alert', 'confirm', 'actions', 'popup'

## menus
>type : Array
>>modal类型为'actions'时候的列表数据，格式为[{value:xxxx,type:xxx,label:xxx}]
>>格式的value:为值，可以是html
>>格式的type:类型限制填【header,alert】特殊
>>格式的label:绑定事件名，默认actionsClick事件

## noShowCancel
>type : Boolean
>>modal类型为'actions'时是否隐藏取消，默认显示

## title
>type : String
>>标题

## isOpen
>type : Boolean
>>是否打开

## closeBtn
>type : Boolean
>>是否显示关闭按钮

## confirmText
>type : String
>>确定按钮文字，默认为“确定”

## cancelText
>type : String
>>关闭按钮文字，默认为“确定”

## closeFromBack
>type : Boolean
>>点击遮罩层是否关闭 modal

# emit

## Close
>点击遮罩时候的回调

## Confirm
>modal确定时候回调

## actionsClick
>modal为actions时候 actions的列表点击响应事件

# 使用
><a>https://github.com/zjhr/vue-amazeui/blob/master/src/views/Modal.vue</a>

# 演示
><a>https://zjhr.github.io/vue-amazeui-demo/#/Modal</a>
