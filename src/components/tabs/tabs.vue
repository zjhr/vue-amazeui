<template>
    <div class="tabs" :class="{'tabs-inset':inset}">
        <button-group ref="buttonGroup" :amSize="amSize" class="tabs-nav" justify>
            <slot name="tabs"></slot>
        </button-group>
        <tabs-body ref="tabsBody" class="tabs-body">
            <slot name='desc'></slot>
        </tabs-body>
        <slot></slot>
    </div>
</template>

<script>
    import * as vueBtn from '../button';
    import tabsBody from './tabsBody.vue'
    export default {
        name: 'tabs',
        props: {
            value: { //选中项，0，1,2
                type: [String, Number],
                default: 0
            },
            inset: Boolean, //加边距
            amSize: {
                type: String,
                default: "sm"
            } //tab尺寸。可选值：,'xs','sm','lg','xl',不设置则显示默认尺寸,tab默认sm。
        },
        data() {
            return {
                itemValue: this.value
            }
        },
        mounted() {
            this.updateIndex()
        },
        methods: {
            updateIndex() {
                let slotsTabs = this.$refs.buttonGroup.$children
                let slotsDesc = this.$refs.tabsBody.$children
                if (!slotsTabs && !slotsDesc || slotsTabs.length !== slotsDesc.length) return
                let isHasActive = false
                for (let i = 0; i < slotsTabs.length; i++) {
                    slotsTabs[i].currentIndex = i
                    slotsDesc[i].currentIndex = i
                    if (slotsTabs[i].active) {
                        this.itemValue = i
                        slotsDesc[i].activeItem = isHasActive = true
                    }
                }
                if (!isHasActive) {
                    slotsTabs[this.itemValue].activeItem = true
                    slotsDesc[this.itemValue].activeItem = true
                }
            }
        },
        watch: {
            value(val, oldval) {
                this.itemValue = val
            },
            itemValue(val, oldval) {
                this.$refs.buttonGroup.$children[val].activeItem = true
                this.$refs.buttonGroup.$children[oldval].activeItem = false
                this.$refs.tabsBody.$children[val].activeItem = true
                this.$refs.tabsBody.$children[oldval].activeItem = false
                this.$emit('input', val)
                this.$emit('change', val)
            }
        },
        components: {
            ...vueBtn,
            tabsBody
        }

    }

</script>