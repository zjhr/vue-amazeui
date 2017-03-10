# slider
---
>轮播图组件父

#prop

##noControls
>type : Boolean
>>不显示「上、下翻页」按钮

##noPager
>type : Boolean
>>不显示「分页圆点」按钮

##interval
>type : String, Number
>>轮播间隔时间最小1000，默认为 5000（ms）。

##noAutoPlay
>type : String, Number
>>关闭自动播放

##noLoop
>type : Boolean
>>关闭循环播放

##defaultActiveIndex
>type : String, Number
>>默认激活的幻灯片下标。默认为0

#emit

##enterAfter
>轮播进入后回调

##leaveAfter
>轮播离开后回调


# slider-Item
---
>轮播图组件子

#prop

##title
>type : String
>>引用标题显示轮播上

##src
>type : String, Boolean
>>使用缩略图，缩略图地址


#使用
><a>https://github.com/zjhr/vue-amazeui/blob/master/src/views/Slider.vue</a>

#演示
><a>https://zjhr.github.io/vue-amazeui-demo/#/Slider</a>
