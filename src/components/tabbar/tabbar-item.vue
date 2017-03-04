<template>
    <span class="tabbar-item" :class="{'active': activeitem}" @click="tabbarItemClickFun">
        <icon class="icon" v-if="icon" :name="icon" :href="href">
            <badge v-if="badge" slot="badge" :amStyle="badgeStyle" rounded>
                {{badge}}
            </badge>
        </icon>
        <icon v-if="title" class="tabbar-label" :href="href">
            {{title}}
        </icon>
    </span>
</template>

<script>
    import Icon from '../icon';
    import Badge from '../badge';
    export default {
        name: 'tabbar-item',
        props: {
            title: String, //文字
            icon: String, //图标名称
            href: { //是否加链接
                type: [String, Boolean],
                default: false
            },
            active: Boolean, //是否选中
            badge: { //子项小徽章上显示的文字
                type: [Boolean, String, Number],
                default: false
            },
            badgeStyle: {
                type: String,
                default: "red"
            } //小徽章颜色样式，默认为 alert
        },
        beforeMount() {
            if (this.active) {
                this.activeitem = this.active
            }
        },
        data() {
            return {
                activeitem: false
            }
        },
        methods: {
            tabbarItemClickFun(e) {
                if (this.$parent.noActive) return;
                this.$parent.itemsIndex = this.currentIndex;
                this.$nextTick(() => {
                    this.$emit('tabbarItemClick', e)
                })
            }
        },
        components: {
            Badge,
            Icon
        }

    }

</script>

<style scoped>

</style>