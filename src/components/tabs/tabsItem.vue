<template>
    <vue-button :amSize="pamSize" :class="objectClass" :active="activeItem" :hollow="hollow" :disabled="disabled" @buttonClick="tabsItemClickFun">
        <slot></slot>
    </vue-button>
</template>

<script>
    import * as vueBtn from '../button';
    import color from '../internal/color';
    export default {
        name: 'tabs-item',
        mixins: [color],
        props: {
            hollow: Boolean, //是否应用「镂空」样式。
            disabled: Boolean //是否应用「禁止」样式。
        },
        data() {
            return {
                name: 'btn',
                activeItem: this.active,
                pamSize: ''
            }
        },
        methods: {
            tabsItemClickFun(e) {
                this.$parent.$parent.itemValue = this.currentIndex
                this.$emit('tabsItemClick', e)
            }
        },
        components: {
            ...vueBtn
        }

    }

</script>