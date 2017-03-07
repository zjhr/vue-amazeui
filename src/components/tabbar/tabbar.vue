<template>
    <nav ref="tabbar" class="tabbar" :class="objectClass">
        <slot></slot>
    </nav>
</template>

<script>
    import color from '../internal/color';
    import Items from '../internal/items.js';
    export default {
        name: 'tabbar',
        mixins: [Items, color],
        props: {
            noActive: Boolean, //取消选中效果
        },
        data() {
            return {
                name: 'tabbar',
                itemsIndex: 0
            }
        },
        watch: {
            itemsIndex(val, oldval) {
                this.$children[val].activeitem = true;
                this.$children[oldval].activeitem = false;
            }
        }
    }

</script>