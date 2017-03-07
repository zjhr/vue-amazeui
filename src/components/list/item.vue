<template>
    <li class="item" :class="objectClass">
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
        }

    }

</script>