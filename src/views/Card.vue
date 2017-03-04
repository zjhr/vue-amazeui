<template>
    <vueview>
        <navbar slot="header" blue>
            Card
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <div class="sk-demos">
            <h3>简单的卡片</h3>
            <card>
                怎能就让这不停燃烧的心， 就这样耗尽消失在平庸里。
            </card>
            <h3>标题</h3>
            <card title="Card 标题">
                Card 内容
            </card>
            <h3>头部和底部</h3>
            <card>
                <span slot="header">Card header</span>
                Card 内容
                <span slot="footer">Card footer</span>
            </card>
            <h3>背景头部</h3>
            <card title="Cover + 标题: 我思念的城市" bg="http://lorempixel.com/1000/625/people/">
                风路过的时候  没能吹走
                <br>这个城市太厚的灰尘
                <br>多少次的雨水  从来没有
                <br>冲掉你那沉重的忧伤
                <br>你的忧伤  像我的绝望
                <br>那样漫长
            </card>
            <card title="Card 标题">
                <p>Card 内容</p>
                <a slot="footer" href="javascript: void(0)">Like</a>
                <a slot="footer" href="javascript: void(0)">Comment</a>
                <a slot="footer" href="javascript: void(0)">ReadMore</a> 
            </card>
        </div>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import Card from 'components/card';
    export default {
        components: {
            ...Index,
            Card
        }

    }
</script>

<style scoped>

</style>