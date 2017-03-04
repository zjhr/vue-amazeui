<template>
    <vueview>
        <navbar slot="header" blue>
            Grid
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <div class="sk-demos ks-grid">
            <h2>基本演示</h2>
            <group header="演示说明">
                <p>为方便查看效果，添加了线框边距，实际使用时没有：</p>
                <ul><li>Grid： 虚线框</li><li>Cell： 灰色线框</li></ul>
            </group>
            <group header="基本网格" footer="列分布在一行上">
                <grid>
                    <cell>cell</cell>
                    <cell>cell</cell>
                </grid>
            </group>
            <group header="指定列所占比例" footer="在 Cell 上通过 cells 属性指定列所占比例（总数为 6）">
                <grid>
                    <cell cells="4">cells：4</cell>
                    <cell cells="2">cells：2</cell>
                </grid>
            </group>
            <group header='换行：wrap="wrap"' footer="通过 Grid 的 wrap 属性设置列是否换行">
                <grid wrap="wrap">
                    <cell cells="4">cells：4</cell>
                    <cell cells="2">cells：2</cell>
                    <cell cells="2">cells：2</cell>
                    <cell cells="4">cells：4</cell>
                </grid>
            </group>
            <group header='换行：wrap="reverse"' footer="没有反转时的顺序为 5-1-2">
                <grid wrap="reverse">
                    <cell cells="5">cells：5</cell>
                    <cell cells="1">cells：1</cell>
                    <cell cells="2">cells：2</cell>
                </grid>
            </group>
            <group header='等分网格' footer="超出等分数的将分布到下一行（上面的示例中为 4 等分）">
                <grid avg="4">
                    <cell>cell</cell><cell>cell</cell><cell>cell</cell><cell>cell</cell>
                    <cell>cell</cell><cell>cell</cell><cell>cell</cell><cell>cell</cell>
                    <cell>cell</cell><cell>cell</cell><cell>cell</cell><cell>cell</cell>
                    <cell>cell</cell><cell>cell</cell>
                </grid>
            </group>
            <group header='收缩的列' footer="Cell 指定 shrink 属性后自动收缩到内容所占宽">
                <grid>
                    <cell shrink>Shrink me</cell>
                    <cell>cell</cell>
                </grid>
            </group>
            <group header='列偏移'>
                <grid>
                    <cell cells="3" offset="1">cells: 3, offset: 1</cell>
                </grid>
            </group>
            <h2>网格嵌套</h2>
            <group>
                <grid>
                    <cell>
                        <grid>
                            <cell>
                                cell
                            </cell>
                            <cell>
                                cell
                            </cell>
                        </grid>
                    </cell>
                    <cell>
                        <grid>
                            <cell>
                                cell
                            </cell>
                            <cell>
                                cell
                            </cell>
                        </grid>
                    </cell>
                </grid>
            </group>
            <h2>不足 6 时对齐方式</h2>
            <group header='默认：左对齐'>
                <grid>
                    <cell cells="2">cells: 2</cell>
                    <cell cells="2">cells: 2</cell>
                </grid>
            </group>
            <group header='居中对齐'>
                <grid align="center">
                    <cell cells="2">cells: 2</cell>
                    <cell cells="2">cells: 2</cell>
                </grid>
            </group>
            <group header='右对齐'>
                <grid align="right">
                    <cell cells="2">cells: 2</cell>
                    <cell cells="2">cells: 2</cell>
                </grid>
            </group>
            <group header='左右分布' footer="justify-content: space-between">
                <grid align="between">
                    <cell cells="2">cells: 2</cell>
                    <cell cells="2">cells: 2</cell>
                </grid>
            </group>
            <group header='平均分布'>
                <grid align="around">
                    <cell cells="2">cells: 2</cell>
                    <cell cells="2">cells: 2</cell>
                </grid>
            </group>
            <h2>网格边框</h2>
            <group header='bordered 属性'>
                <p>在 Grid 上添加<code>bordered</code> 结合
                <code>avg</code>属性可以实现九宫格效果。</p>
                <p><router-link to="Icon" replace>九宫格演示</router-link></p>
            </group>
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
    .ks-grid .g .g {
        margin: 5px 0;
        border-color: #6495ed;
    }
    
    .ks-grid .g {
        margin: 5px 5px 0;
        border: 1px dashed red;
        padding: 5px;
    }
    
    .ks-grid .col {
        border: 1px solid #ddd;
        min-height: 20px;
        background: #fff;
    }
</style>