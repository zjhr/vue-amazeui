<template>
    <vueview>
        <navbar slot="header" blue>
            Slider
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <group header="默认" noPadded>
            <slider>
                <slider-item>
                    <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg">
                </slider-item>
                <slider-item>
                    <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg">
                </slider-item>
                <slider-item>
                    <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg">
                </slider-item>
                <slider-item>
                    <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg">
                </slider-item>
            </slider>
        </group>
        <group header="缩略图" noPadded>
            <slider noControls>
                <slider-item src="http://s.amazeui.org/media/i/demos/bing-1.jpg">
                    <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg">
                </slider-item>
                <slider-item src="http://s.amazeui.org/media/i/demos/bing-2.jpg">
                    <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg">
                </slider-item>
                <slider-item src="http://s.amazeui.org/media/i/demos/bing-3.jpg">
                    <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg">
                </slider-item>
                <slider-item src="http://s.amazeui.org/media/i/demos/bing-4.jpg">
                    <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg">
                </slider-item>
            </slider>
        </group>
        <group header="标题" noPadded>
            <slider>
                <slider-item title="标题1">
                    <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg">
                </slider-item>
                <slider-item title="标题2">
                    <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg">
                </slider-item>
                <slider-item title="标题3">
                    <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg">
                </slider-item>
                <slider-item title="标题4">
                    <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg">
                </slider-item>
            </slider>
        </group>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import * as Slider from 'components/slider';
    export default {
        components: {
            ...Index,
            ...Slider
        }

    }

</script>

<style scoped>

</style>