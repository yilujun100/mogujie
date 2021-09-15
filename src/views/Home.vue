<template>
    <header>
        CSS 架构
    </header>
    <a href="https://baidu.com">百度</a>
    <input type="text" />
    <div radius1></div>
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
    color: $color-primary;
    @include box-center(center, center);
}
</style>
