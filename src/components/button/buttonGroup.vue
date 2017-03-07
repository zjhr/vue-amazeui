<template>
    <div :class="[btnObjectClass,objectClass]">
        <slot></slot>
    </div>
</template>

<script>
    import color from '../internal/color';
    export default {
        name: 'button-group',
        mixins: [color],
        props: {
            toolbar: Boolean, //是否使用工具栏形式,用于放置 <vue-button>，创建按钮工具拦效果。
            hollow: Boolean, //是否应用「镂空」样式。该属性会传递到子 <vue-button> 组件上，子 <vue-button> 组件不用再设置。
            justify: Boolean, //按钮组宽度是否适应容器宽度。
            stacked: Boolean, //按钮是否垂直堆叠排列。
            amSize: String //按钮尺寸。可选值：,'xs','sm','lg','xl',不设置则显示默认尺寸。
        },
        methods: {
            propsDataFun() {
                let {
                    hollow,
                    amSize,
                    blue,
                    sblue,
                    green,
                    orange,
                    red,
                    black,
                    amStyle
                } = this.objectprops
                this.$children.forEach((item, index) => {
                    item.phollow = hollow
                    item.pamSize = amSize
                    item.pblue = blue
                    item.psblue = sblue
                    item.pgreen = green
                    item.porange = orange
                    item.pred = red
                    item.pblack = black
                    item.pamStyle = amStyle
                })
            }
        },
        mounted() {
            this.propsDataFun();
        },
        data() {
            return {
                name: 'btn-grounp'
            }
        },
        computed: {
            objectprops() {
                return {
                    hollow: this.hollow,
                    amSize: this.amSize,
                    blue: this.blue,
                    sblue: this.sblue,
                    green: this.green,
                    orange: this.orange,
                    red: this.red,
                    black: this.black,
                    amStyle: this.amStyle
                }
            },
            btnObjectClass() {
                return {
                    'btn-toolbar': this.toolbar,
                    'btn-group': !this.toolbar,
                    'btn-group-justify': this.justify,
                    'btn-group-stacked': this.stacked
                }
            }
        },
        watch: {
            objectprops() {
                this.propsDataFun();
            }
        }
    }

</script>