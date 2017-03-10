<template>
    <div class="slider">
        <slider-slides ref="sliderSlides" @silderRight="leftNavFun({index:false,autoPlay:playtime})" @silderLeft="rightNavFun({index:false,autoPlay:playtime})"
            @silderStart="silderStartFun">
            <slot></slot>
            </slider-slides>
            <div v-if="!noControls" class="slider-control">
                <span class="slider-control-prev"><icon name="left-nav" @iconClick="leftNavFun"></icon></span>
                <span class="slider-control-next"><icon name="right-nav" @iconClick="rightNavFun"></icon></span>
            </div>
            <ol v-if="!noPager" class="slider-pager" :class="sliderPagerClass">
                <li v-for="(item,index) in items" :class="{'active':item.active}" @click="pagerClickFun(index)">
                    <img v-if="isThumbs" :src="item.img">
                </li>
            </ol>
    </div>
</template>

<script>
    import sliderSlides from './sliderSlides'
    import Icon from '../icon';
    export default {
        name: 'slider',
        props: {
            noControls: Boolean,//不显示「上、下翻页」按钮
            noPager: Boolean,//不显示「分页圆点」按钮 
            interval: {
                type: [String, Number],
                default: 5000
            },//轮播间隔时间最小1000，默认为 5000（ms）。
            noAutoPlay: Boolean,//关闭自动播放
            noLoop: Boolean,//关闭循环播放。
            defaultActiveIndex: {
                type: [String, Number],
                default: 0
            },//默认激活的幻灯片下标。
        },
        data() {
            return {
                sliderItemActive: this.defaultActiveIndex * 1,
                isThumbs: false,
                items: [],
                oneTap: false,
                timeout: '',
                playtime: 5000,
                children: []
            }
        },
        mounted() {
            this.updateIndex()
            if (!this.noAutoPlay) {
                const playtime = this.interval < 1000 ? 1000 : this.interval * 1
                this.playtime = playtime
                this.autoPlayFun(playtime)
            }
        },
        methods: {
            enterAfterFun(currentIndex, slide) {
                this.$emit('enterAfter', currentIndex, slide)//幻灯片切换后的回调函数，第一个参数幻灯片编号，第二个参数为滚动方向。
            },
            leaveAfterFun(currentIndex, slide) {
                this.$emit('leaveAfter', currentIndex, slide)//幻灯片切换后的回调函数，第一个参数幻灯片编号，第二个参数为滚动方向。
            },
            silderStartFun() {
                clearTimeout(this.timeout)
            },
            autoPlayFun(playtime) {
                this.timeout = setTimeout(() => {
                    this.silderStartFun()
                    this.rightNavFun({ autoPlay: playtime })
                }, playtime)
            },
            updateIndex() {
                let children = this.children = this.$refs.sliderSlides.$children
                if (!children.length) return
                let sum = 0;
                for (let i = 0; i < children.length; i++) {
                    children[i].currentIndex = i
                    if (i == this.defaultActiveIndex) {
                        children[i].activeItem = true
                    }
                    this.items.push({
                        active: children[i].activeItem,
                        img: children[i].src
                    })
                    if (children[i].src) sum++;
                }
                if (sum === children.length) {
                    this.isThumbs = true
                }
            },
            sliderFun(slide, Next, autoPlay) {
                if (this.oneTap) return
                this.oneTap = true
                let children = this.children
                const ItemActive = this.sliderItemActive
                let ItemActiveNext;
                if (Next === false && slide === 'left') {
                    if (!this.noLoop) {
                        ItemActiveNext = ItemActive + 1 == children.length ? 0 : ItemActive + 1
                    } else {
                        ItemActiveNext = ItemActive + 1 >= children.length ? children.length - 1 : ItemActive + 1
                    }
                } else if (Next === false && slide === 'right') {
                    if (!this.noLoop) {
                        ItemActiveNext = ItemActive - 1 < 0 ? children.length - 1 : ItemActive - 1
                    } else {
                        ItemActiveNext = ItemActive - 1 < 0 ? 0 : ItemActive - 1
                    }
                } else {
                    ItemActiveNext = Next
                }
                children[ItemActive].slide = children[ItemActiveNext].slide = slide
                children[ItemActive].leave = true
                children[ItemActiveNext].enter = true
                children[ItemActiveNext].activeItem = true
                if (!this.noPager) {
                    this.items[ItemActive].active = false
                    this.items[ItemActiveNext].active = true
                }
                setTimeout(() => {
                    children[ItemActive].activeItem = false
                    this.sliderItemActive = ItemActiveNext;
                    this.oneTap = false
                    if (autoPlay) this.autoPlayFun(autoPlay)
                }, 500)

            },
            leftNavFun({ index = false, autoPlay = false }) {
                this.sliderFun('right', index, autoPlay)
            },
            rightNavFun({ index = false, autoPlay = false }) {
                this.sliderFun('left', index, autoPlay)
            },
            pagerClickFun(index) {
                this.silderStartFun()
                if (index > this.sliderItemActive) {//右按钮
                    this.rightNavFun({ index, autoPlay: this.playtime })
                } else if (index < this.sliderItemActive) {//左按钮
                    this.leftNavFun({ index, autoPlay: this.playtime })
                }
            }
        },
        computed: {
            sliderPagerClass() {
                return {
                    'slider-indicators': !this.isThumbs,
                    'slider-thumbs': this.isThumbs
                }
            }
        },
        components: {
            sliderSlides,
            Icon
        }

    }

</script>