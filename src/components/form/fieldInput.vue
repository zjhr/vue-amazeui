<template>
    <input v-if="type==='number'" v-model.number="currentValue" @change="handleChange" :name="name" class="field" :disabled="disabled"
        :placeholder="placeholder" :readonly="readonly" pattern="[0-9]*" type="number" :autofocus="autofocus" :max="max" :min="min"
        :step="step" :maxlength="maxlength" @focus="focusHandler" @blur="blur" />
    <input v-else-if="type==='range'" v-model.number="currentValue" @change="handleChange" :name="name" class="field" :disabled="disabled"
        type="range" :autofocus="autofocus" :max="max" :min="min" :step="step" :maxlength="maxlength" @focus="focusHandler" @blur="blur"
    />
    <select v-else-if="type==='select' || options || $slots.default" :name="name" class="field" v-model="currentValue" @change="handleChange"
        :disabled="disabled" :multiple="multiple">
        <slot></slot>
        <option v-if="options" v-for="(item,index) in options" :value="item.value">
            {{item.text}}
        </option>
        </select>
        <textarea v-else-if="type==='textarea'" :name="name" class="field" :placeholder="placeholder" :value="value" :autofocus="autofocus"
            v-model="currentValue" @change="handleChange" :disabled="disabled" :maxlength="maxlength" @focus="focusHandler" @blur="blur"></textarea>

            <input v-else-if="type==='text'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field" :placeholder="placeholder"
                :value="value" :autofocus="autofocus" :maxlength="maxlength" :disabled="disabled" type="text" @focus="focusHandler"
                @blur="blur">

                <input v-else-if="type==='date'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field" :placeholder="placeholder"
                    :value="value" :autofocus="autofocus" :disabled="disabled" type="date" @focus="focusHandler" @blur="blur">

                    <input v-else-if="type==='datetime-local'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field"
                        :placeholder="placeholder" :value="value" :autofocus="autofocus" :disabled="disabled" type="datetime-local"
                        @focus="focusHandler" @blur="blur">

                        <input v-else-if="type==='datetime'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field" :placeholder="placeholder"
                            :value="value" :autofocus="autofocus" :disabled="disabled" type="datetime" @focus="focusHandler"
                            @blur="blur">

                            <input v-else-if="type==='month'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field" :placeholder="placeholder"
                                :value="value" :autofocus="autofocus" :disabled="disabled" type="month" @focus="focusHandler"
                                @blur="blur">

                                <input v-else-if="type==='week'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field" :placeholder="placeholder"
                                    :value="value" :autofocus="autofocus" :disabled="disabled" type="week" @focus="focusHandler"
                                    @blur="blur">

                                    <input v-else-if="type==='time'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field" :placeholder="placeholder"
                                        :value="value" :autofocus="autofocus" :disabled="disabled" type="time" @focus="focusHandler"
                                        @blur="blur">

                                        <input v-else-if="type==='email'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field" :placeholder="placeholder"
                                            :value="value" :autofocus="autofocus" :maxlength="maxlength" :disabled="disabled"
                                            type="email" @focus="focusHandler" @blur="blur">

                                            <input v-else-if="type==='password'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field" :placeholder="placeholder"
                                                :value="value" :autofocus="autofocus" :maxlength="maxlength" :disabled="disabled"
                                                type="password" @focus="focusHandler" @blur="blur">

                                                <input v-else-if="type==='search'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field" :placeholder="placeholder"
                                                    :value="value" :autofocus="autofocus" :maxlength="maxlength" :disabled="disabled"
                                                    type="search" @focus="focusHandler" @blur="blur">

                                                    <input v-else-if="type==='tel'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field" :placeholder="placeholder"
                                                        :value="value" :autofocus="autofocus" :maxlength="maxlength" :disabled="disabled"
                                                        type="tel" @focus="focusHandler" @blur="blur">

                                                        <input v-else-if="type==='url'" :name="name" v-model.trim="currentValue" @change="handleChange" class="field" :placeholder="placeholder"
                                                            :value="value" :autofocus="autofocus" :maxlength="maxlength" :disabled="disabled"
                                                            type="url" @focus="focusHandler" @blur="blur">

                                                            <input v-else-if="type==='checkbox'" :name="name" v-model="currentValue" @change="handleChange" class="field" :value="!!value"
                                                                :disabled="disabled" type="checkbox">

                                                                <input v-else-if="type==='radio'" :name="name" v-model="currentValue" @change="handleChange" class="field" :value="!!value"
                                                                    :disabled="disabled" type="radio">
</template>

<script>
    export default {
        name: 'field-input',
        props: {
            multiple: Boolean, //select多选
            cols: { //textarea 	规定文本区内的可见宽度。
                type: [Boolean, String, Number],
                default: false
            },
            rows: { //textarea 规定文本区内的可见行数。
                type: [Boolean, String, Number],
                default: false
            },
            maxlength: { //规定输入字段中的字符的最大长度
                type: [Boolean, String, Number],
                default: false
            },
            disabled: Boolean, //是否禁用
            readonly: Boolean, //是否可以填写,
            name: String, //name,
            options: {
                type: [Boolean, Array],
                default: false
            }, //option数组，格式[{text:xxx,value:xxx}],
            type: { //类型
                type: String,
                default: "text"
            },
            placeholder: String, //placeholder,
            value: {
                type: [String, Boolean],
                default: ''
            }, //默认值,//radio,checkbox是否选中为Boolean
            autofocus: Boolean, //是否开始获取焦点，input类型有效
            max: {
                type: [Boolean, String, Number],
                default: false
            }, //限制最大值，date pickers，range，number有效
            min: {
                type: [Boolean, String, Number],
                default: false
            }, //限制最小值，date pickers，range，number有效
            step: {
                type: [Boolean, String, Number],
                default: false
            } //限制间隔值，date pickers，range，number有效
        },
        data() {
            return {
                currentValue: this.value
            }
        },
        methods: {
            handleChange() {
                this.$emit('change', this.currentValue)
            },
            focusHandler() {
                this.$emit('on-focus', this.currentValue)
            },
            blur() {
                this.$emit('on-blur', this.currentValue)
            }
        },
        watch: {
            value(val) {
                this.currentValue = val
            },
            currentValue(val) {
                this.$emit('input', val)
            }
        }

    }

</script>