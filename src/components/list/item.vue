<template>
    <li class="item" :class="objectClass" @click="listItemClickFun">
        <router-link v-if="href === '' || href" :to="href === '' || !href ? $route.path : href">
            <slot></slot>
        </router-link>
        <slot v-else></slot>
    </li>
</template>

<script>
    export default {
        name: 'item',
        props: {
            href: {
                type: [Boolean, String],
                default: false
            },
            objectClass: Object
        },
        methods: {
            listItemClickFun(e) {
                this.$emit('listItemClick', e)
            }
        }
    }

</script>