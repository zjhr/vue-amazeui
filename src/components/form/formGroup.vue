<template>
    <div :class="objectClass">
        <!--组建输入框组时输入框前面的按钮。-->
        <slot v-if="!set" name="btnBefore"></slot>
        <span v-if="!set && !$slots.btnBefore" class="field-group-label">
            {{labelBefore}}
            <slot name="left"></slot>
        </span>
        <slot></slot>
        <!--组建输入框组时输入框后面的按钮。-->
        <slot v-if="!set" name="btnAfter"></slot>
        <span v-if="!set && !$slots.btnAfter" class="field-group-label">
            {{labelAfter}}
            <slot name="right"></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'form-group',
        props: {
            set: Boolean, //是否为form-set，默认为gruop
            labelBefore: String, //组建输入框组时输入框前面的文字。
            labelAfter: String //组建输入框组时输入框后面的文字。
        },
        computed: {
            objectClass() {
                return {
                    'field-group': !this.set,
                    'form-set': this.set
                }
            }
        }

    }

</script>