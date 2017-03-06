<template>
    <vueview>
        <navbar slot="header" blue>
            Icon
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <p class="padding">下面的宫格基于 Grid 组件实现，具体代码参见 Icon 文档。</p>
        <div class="sk-icons text-center">
            <grid avg="4" bordered>
                <cell><icon name="back"></icon><div class="sk-icon-name text-truncate">back</div></cell>
                <cell><icon name="bars"></icon><div class="sk-icon-name text-truncate">bars</div></cell>
                <cell><icon name="caret"></icon><div class="sk-icon-name text-truncate">caret</div></cell>
                <cell><icon name="check"></icon><div class="sk-icon-name text-truncate">check</div></cell>
                <cell><icon name="close"></icon><div class="sk-icon-name text-truncate">close</div></cell>
                <cell><icon name="code"></icon><div class="sk-icon-name text-truncate">code</div></cell>
                <cell><icon name="compose"></icon><div class="sk-icon-name text-truncate">compose</div></cell>
                <cell><icon name="download"></icon><div class="sk-icon-name text-truncate">download</div></cell>
                <cell><icon name="edit"></icon><div class="sk-icon-name text-truncate">edit</div></cell>
                <cell><icon name="forward"></icon><div class="sk-icon-name text-truncate">forward</div></cell>
                <cell><icon name="gear"></icon><div class="sk-icon-name text-truncate">gear</div></cell>
                <cell><icon name="home"></icon><div class="sk-icon-name text-truncate">home</div></cell>
                <cell><icon name="info"></icon><div class="sk-icon-name text-truncate">info</div></cell>
                <cell><icon name="list"></icon><div class="sk-icon-name text-truncate">list</div></cell>
                <cell><icon name="more-vertical"></icon><div class="sk-icon-name text-truncate">more-vertical</div></cell>
                <cell><icon name="more"></icon><div class="sk-icon-name text-truncate">more</div></cell>
                <cell><icon name="pages"></icon><div class="sk-icon-name text-truncate">pages</div></cell>
                <cell><icon name="pause"></icon><div class="sk-icon-name text-truncate">pause</div></cell>
                <cell><icon name="person"></icon><div class="sk-icon-name text-truncate">person</div></cell>
                <cell><icon name="play"></icon><div class="sk-icon-name text-truncate">play</div></cell>
                <cell><icon name="plus"></icon><div class="sk-icon-name text-truncate">plus</div></cell>
                <cell><icon name="refresh"></icon><div class="sk-icon-name text-truncate">refresh</div></cell>
                <cell><icon name="search"></icon><div class="sk-icon-name text-truncate">search</div></cell>
                <cell><icon name="share"></icon><div class="sk-icon-name text-truncate">share</div></cell>
                <cell><icon name="sound"></icon><div class="sk-icon-name text-truncate">sound</div></cell>
                <cell><icon name="sound2"></icon><div class="sk-icon-name text-truncate">sound2</div></cell>
                <cell><icon name="sound3"></icon><div class="sk-icon-name text-truncate">sound3</div></cell>
                <cell><icon name="sound4"></icon><div class="sk-icon-name text-truncate">sound4</div></cell>
                <cell><icon name="star-filled"></icon><div class="sk-icon-name text-truncate">star-filled</div></cell>
                <cell><icon name="star"></icon><div class="sk-icon-name text-truncate">star</div></cell>
                <cell><icon name="stop"></icon><div class="sk-icon-name text-truncate">stop</div></cell>
                <cell><icon name="trash"></icon><div class="sk-icon-name text-truncate">trash</div></cell>
                <cell><icon name="up-nav"></icon><div class="sk-icon-name text-truncate">up-nav</div></cell>
                <cell><icon name="up"></icon><div class="sk-icon-name text-truncate">up</div></cell>
                <cell><icon name="right-nav"></icon><div class="sk-icon-name text-truncate">right-nav</div></cell>
                <cell><icon name="right"></icon><div class="sk-icon-name text-truncate">right</div></cell>
                <cell><icon name="down-nav"></icon><div class="sk-icon-name text-truncate">down-nav</div></cell>
                <cell><icon name="down"></icon><div class="sk-icon-name text-truncate">down</div></cell>
                <cell><icon name="left-nav"></icon><div class="sk-icon-name text-truncate">left-nav</div></cell>
                <cell><icon name="left"></icon><div class="sk-icon-name text-truncate">left</div></cell>
            </grid>
        </div>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import * as G from 'components/grid';
    export default {
        components: {
            ...Index,
            ...G
        }
    }
</script>

<style scoped>
    .sk-icon-name,
    .sk-icons .col {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    
    .sk-icon-name {
        color: #888;
    }
</style>