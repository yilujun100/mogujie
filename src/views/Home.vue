<template>
    <header>
        CSS 架构
    </header>
    <a href="https://baidu.com">百度</a>
    <input type="text" />
    <div radius1></div>
    <div class="home">
        <div class="home__item1">
            <img
                src="https://s11.mogucdn.com/mlcdn/c45406/201126_0hgl23klege84596ljk0hgcc0g3f2_1060x367.jpg_750x9999.v1c7E.81.webp"
                alt=""
            />
        </div>
        <div class="home__item2">
            <p>
                甜心团队从三个人发展到现在，一路走来相互扶持相互陪伴才有了今天的成就，想到你们这么多年的感情听到你们一起唱歌忍不住泪目，希望你们友谊长存，甜心团队加油🙃🙃
            </p>
        </div>
        <div class="home__item3" mt30>你好 CSS</div>
        <c-launch class="home__launch" mb10></c-launch>
        <c-box-center bg-tertiary radius4>打开APP</c-box-center>
        <balance-two
            theme="multi-color"
            size="34"
            :fill="['#e41515', '#326fc2', '#FFF', '#43CCF8']"
            :strokeWidth="2"
        />
        <hamburger-button
            theme="multi-color"
            size="34"
            :fill="['#5f4f4f', '#2F88FF', '#FFF', '#43CCF8']"
            :strokeWidth="2"
        />
        <star
            theme="multi-color"
            size="34"
            :fill="['#fcee0e', '#fffa2f', '#FFF', '#43CCF8']"
            :strokeWidth="2"
        />
    </div>
</template>

<script>
// @ is an alias to /src
import { BalanceTwo, HamburgerButton, Star } from '@icon-park/vue-next'

export default {
    name: 'Home',
    components: {
        BalanceTwo,
        HamburgerButton,
        Star
    }
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
