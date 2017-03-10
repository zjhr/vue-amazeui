# field
---
>表单相关组件。

#prop

##label
>type : String
>>标题

##check
>type : Boolean
>>当<field-input>type为CheckBox或radio时候必须设置

# field-input
---
>表单相关组件。可以v-model绑定值

#prop

##type
>type : String
>>类型，默认为text

##placeholder
>type : String
>>placeholder

##value
>type : String, Boolean
>>value

##autofocus
>type : Boolean
>>是否开始获取焦点，input类型有效

##max
>type : Boolean, String, Number
>>限制最大值，date pickers，range，number有效

##min
>type : Boolean, String, Number
>>限制最小值，date pickers，range，number有效

##step
>type : Boolean, String, Number
>>限制间隔值，date pickers，range，number有效

##multiple
>type : Boolean, String, Number
>>type为select多选

##cols
>type : Boolean, String, Number
>>type为textarea 规定文本区内的可见宽度。

##rows
>type : Boolean, String, Number
>>type为textarea 规定文本区内的可见行数。

##maxlength
>type : Boolean, String, Number
>>规定输入字段中的字符的最大长度

##disabled
>type : Boolean
>>是否禁用

##readonly
>type : Boolean
>>是否只读

##name
>type : String
>>控件name

##options
>type : Boolean, Array
>>type为select可以用 option数组，格式[{text:xxx,value:xxx}]，也可以用slot

# form-group
---
>表单组 组件

#prop

##set
>type : Boolean
>>是否为form-set，默认为gruop

##labelBefore
>type : String
>>组建输入框组时输入框前面的文字。

##labelAfter
>type : String
>>组建输入框组时输入框后面的文字。

#使用
><a>https://github.com/zjhr/vue-amazeui/blob/master/src/views/Form.vue</a>

#演示
><a>https://zjhr.github.io/vue-amazeui-demo/#/Form</a>
