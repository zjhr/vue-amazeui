<template>
    <vueview>
        <navbar slot="header" blue>
            List
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <div class="sk-demos">
            <group noPadded header="静态列表">
                <list>
                    <list-item role>A</list-item>
                    <list-item title="list item 1" @listItemClick="listItemClickFun">
                        <badge rounded red slot="after">5</badge>
                    </list-item>
                    <list-item title="list item 2">
                        <badge rounded green slot="after">ok</badge>
                    </list-item>
                    <list-item title="list item 3">
                        <vue-switch slot="after"></vue-switch>
                    </list-item>
                    <list-item role>B</list-item>
                    <list-item title="list item 1"></list-item>
                    <list-item title="list item 2"></list-item>
                    <list-item title="list item 3"></list-item>
                    <list-item role>C</list-item>
                    <list-item title="list item 1"></list-item>
                    <list-item title="list item 2"></list-item>
                    <list-item title="list item 3" after="After"></list-item>
                </list>
            </group>
            <group noPadded header="包含链接列表">
                <list>
                    <list-item title="list item 1" href="/"></list-item>
                    <list-item title="list item 2" href="/"></list-item>
                    <list-item title="list item 3" href="/" after="2017.02"></list-item>
                </list>
            </group>
            <group noPadded header="包含图标的列表">
                <list>
                    <list-item title="list item 1">
                        <img slot="img" width="32" src="http://lorempixel.com/128/128/people/" />
                        <badge rounded red slot="after">5</badge>
                    </list-item>
                    <list-item title="list item 2" href="/" after="2017.02">
                        <img slot="img" width="32" src="http://lorempixel.com/128/128/people/" />
                    </list-item>
                    <list-item title="list item 3" href="/">
                        <img slot="img" width="32" src="http://lorempixel.com/128/128/people/" />
                        <badge rounded red slot="after">5</badge>
                    </list-item>
                </list>
            </group>
            <group noPadded header="含描述的文字列表">
                <list>
                    <list-item title="女爵" after="2017.02" subTitle="发行公司：环球唱片" desc="她坦白了我们所虚伪的 她单纯了我们所复杂的
                        五年以来…
                        5年的等待，是个漫长也是耗损的过程。
                        看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
                        她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
                        这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
                        是我们唯一相信且期待杨乃文的理由。" href="http://music.163.com/#/album?id=31308"></list-item>
                        <!--可以使用template无标签渲染 <template slot="after">2017.02 -->
                        <list-item title="第一张精选" href="http://music.163.com/#/album?id=31312">
                            <span slot="after">2017.02</span>
                            <span slot="subTitle">发行公司：滚石唱片</span>
                            <span slot="desc">出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。</span>
                        </list-item>
                        <list-item title="Silence" after="2017.02" subTitle="发行公司：魔岩唱片" desc="所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量"
                            href="http://music.163.com/#/album?id=31319"></list-item>
                </list>
            </group>
            <group noPadded header="图文列表">
                <list>
                    <list-item title="女爵" after="2017.02" subTitle="发行公司：环球唱片">
                        <img slot="img" src="http://lorempixel.com/160/160/people/" width="48" alt="">
                    </list-item>
                    <list-item title="第一张精选" after="2017.02" subTitle="发行公司：滚石唱片" href="http://music.163.com/#/album?id=31312">
                        <img slot="img" src="http://lorempixel.com/160/160/people/" width="48" alt="">
                    </list-item>
                    <list-item title="Silence" after="2017.02" subTitle="发行公司：魔岩唱片" href="http://music.163.com/#/album?id=31319">
                        <img slot="img" src="http://lorempixel.com/160/160/people/" width="48" alt="">
                    </list-item>
                </list>
            </group>
            <h3>Inset</h3>
            <list inset>
                <list-item title="女爵" after="2017.02" subTitle="发行公司：环球唱片">
                    <img slot="img" src="http://lorempixel.com/160/160/people/" width="48" alt="">
                </list-item>
                <list-item title="第一张精选" after="2017.02" subTitle="发行公司：滚石唱片" href="http://music.163.com/#/album?id=31312">
                    <img slot="img" src="http://lorempixel.com/160/160/people/" width="48" alt="">
                </list-item>
                <list-item title="Silence" after="2017.02" subTitle="发行公司：魔岩唱片" href="http://music.163.com/#/album?id=31319">
                    <img slot="img" src="http://lorempixel.com/160/160/people/" width="48" alt="">
                </list-item>
            </list>
            <list>
                <list-item title="女爵" after="2017.02" subTitle="发行公司：环球唱片" desc="她坦白了我们所虚伪的 她单纯了我们所复杂的
                        五年以来…
                        5年的等待，是个漫长也是耗损的过程。
                        看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
                        她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
                        这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
                        是我们唯一相信且期待杨乃文的理由。">
                    <img slot="img" src="http://lorempixel.com/160/160/people/" width="80" alt="">
                    </list-item>
                    <list-item title="第一张精选" after="2017.02" subTitle="发行公司：滚石唱片" desc="出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。"
                        href="http://music.163.com/#/album?id=31312">
                        <img slot="img" src="http://lorempixel.com/160/160/people/" width="80" alt="">
                        </list-item>
                        <list-item title="Silence" after="2017.02" subTitle="发行公司：魔岩唱片" desc="所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量"
                            href="http://music.163.com/#/album?id=31319">
                            <img slot="img" src="http://lorempixel.com/160/160/people/" width="80" alt="">
                            </list-item>
            </list>
            <h3>card 嵌套</h3>
            <card>
                <list>
                    <list-item title="list item 1">
                        <badge rounded red slot="after">5</badge>
                    </list-item>
                    <list-item title="list item 2">
                        <badge rounded green slot="after">ok</badge>
                    </list-item>
                    <list-item title="list item 3">
                        <vue-switch slot="after"></vue-switch>
                    </list-item>
                </list>
            </card>
            <card>
                <list>
                    <list-item title="list item 1" href="/"></list-item>
                    <list-item title="list item 2" href="/"></list-item>
                    <list-item title="list item 3" href="/" after="2017.02"></list-item>
                </list>
            </card>
            <card>
                <list>
                    <list-item title="女爵" after="2017.02" subTitle="发行公司：环球唱片">
                        <img slot="img" src="http://lorempixel.com/160/160/people/" width="48" alt="">
                    </list-item>
                    <list-item title="第一张精选" after="2017.02" subTitle="发行公司：滚石唱片" href="http://music.163.com/#/album?id=31312">
                        <img slot="img" src="http://lorempixel.com/160/160/people/" width="48" alt="">
                    </list-item>
                    <list-item title="Silence" after="2017.02" subTitle="发行公司：魔岩唱片" href="http://music.163.com/#/album?id=31319">
                        <img slot="img" src="http://lorempixel.com/160/160/people/" width="48" alt="">
                    </list-item>
                </list>
            </card>
        </div>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import vueSwitch from 'components/vueSwitch';
    import * as List from 'components/list';
    import Badge from 'components/badge';
    import Card from 'components/card';
    export default {
        methods: {
            listItemClickFun() {
                alert('触发了我')
            }
        },
        components: {
            Badge,
            vueSwitch,
            ...List,
            ...Index,
            Card
        }

    }

</script>

<style scoped>

</style>