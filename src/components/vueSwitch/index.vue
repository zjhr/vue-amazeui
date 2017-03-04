<template>
    <label class="switch">
        <input type="checkbox" :disabled="disabled" v-model="inputValue" @change="handleChange">
        <span class="switch-label"></span>
    </label>
</template>

<script>
    export default {
        name: 'switch',
        props: {
            value: Boolean,
            disabled: Boolean
        },
        data() {
            return {
                inputValue: this.value
            }
        },
        methods: {
            handleChange() {
                this.$emit('change', this.inputValue)
            }
        },
        watch: {
            value(val) {
                this.inputValue = val
            },
            inputValue(val) {
                this.$emit('input', val)
            }
        }

    }

</script>

<style scoped>

</style>