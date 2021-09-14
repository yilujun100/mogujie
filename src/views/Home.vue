<template>
    <header>
        CSS 架构
    </header>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {}
}
</script>

<style lang="scss" scoped>
header {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    @include box-center(center, center);
}
</style>
