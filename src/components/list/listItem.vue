<template>
    <item-content :objectClass="objectClass" :href="href" :slotsImg="$slots.img" :subTitle="subTitle || $slots.subTitle" :desc="desc || $slots.desc"
        :nested="nested">
        <slot v-if="nested"></slot>
        <slot v-if="role"></slot>
        <h3 v-if="title" class="item-title">
            {{title}}
        </h3>
        <div v-if="after || $slots.after" class="item-after">
            {{after}}
            <slot name="after"></slot>
        </div>
        <icon v-if="href === '' || href" name="right-nav" iconClass="item-icon"></icon>
        </item-content>
</template>

<script>
    import itemContent from './itemContent.js';
    import Icon from '../icon';
    export default {
        name: 'listitem',
        props: {
            role: Boolean, //(item,header)子项角色，默认为 item
            title: String, //列表主标题
            subTitle: String, //列表副标题
            desc: String, //列表项摘要、描述信息
            href: {
                type: [Boolean, String],
                default: false
            }, //列表链接。
            after: String, //列表标题后面的附加信息，如日期、小徽章等。
            nested: { //'input', 'radio', 'checkbox',如果列表项中嵌套了以上三种表单类型之一，需要设置改属性。
                type: [String, Boolean],
                default: false
            }
        },
        computed: {
            objectClass() {
                return {
                    'item-header': this.role,
                    'item-linked': this.href === '' || this.href,
                    [`item-${this.nested}`]: this.nested
                }
            }
        },
        components: {
            itemContent,
            Icon
        }

    }

</script>