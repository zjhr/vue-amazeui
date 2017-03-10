import Item from './item';
export default {
    name: 'item-content',
    props: {
        href: {
            type: [Boolean, String],
            default: false
        }, //链接
        objectClass: Object, //样式
        slotsImg: { //slot传递
            type: [Array, Boolean]
        },
        subTitle: { //副标题
            type: [Array, String]
        },
        desc: { //列表项摘要、描述信息
            type: [Array, String]
        },
        nested: { //'input', 'radio', 'checkbox',如果列表项中嵌套了以上三种表单类型之一，需要设置改属性。
            type: [String, Boolean],
            default: false
        }
    },
    methods: {
        subTitleDescChildren(h, value, Class) {
            let isArray = Array.isArray(value)
            return !!value ? h('div', {
                class: {
                    [Class]: true
                },
                domProps: !isArray ? {
                    innerHTML: value
                } : {}
            }, isArray ? value : []) : ''
        },
        listItemClickFun(e){
            this.$emit('listItemClick', e)
        }
    },
    render(h) {
        let { subTitle, desc, slotsImg, $slots, objectClass, nested } = this
        let children = [$slots.default]
        let titleRow = [h('div', { class: { 'item-title-row': true } }, $slots.default)]
        let subTitleDesc = [$slots.default]
        if (subTitle || desc || nested) {
            if (subTitle || desc) {
                Object.assign(objectClass, { 'item-content': true })
                subTitleDesc = [
                    titleRow,
                    this.subTitleDescChildren(h, subTitle, 'item-subtitle'),
                    this.subTitleDescChildren(h, desc, 'item-desc')
                ]
            }
            children = [h('div', { class: { 'item-main': true } }, subTitleDesc)]
        }
        if (slotsImg) {
            children = [
                h('div', { class: { 'item-media': true } }, slotsImg),
                h('div', { class: { 'item-main': true } }, subTitleDesc)
            ]
        }
        return h(Item, {
            props: {
                objectClass: objectClass,
                href: this.href
            },
            on:{
                listItemClick:this.listItemClickFun
            }
        }, [...children])
    },
    components: {
        Item
    }

}