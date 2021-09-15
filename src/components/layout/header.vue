<template>
    <header class="c-header" :class="{ 'c-header--fixed': fixed }">
        <slot></slot>
    </header>
</template>
<script>
export default {
    name: 'CHeader',
    props: {
        fixed: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
@include b(c-header) {
    @include m(fixed) {
        position: fixed;
        top: 0;
        z-index: 10;
        width: 100%;
    }
}
</style>
