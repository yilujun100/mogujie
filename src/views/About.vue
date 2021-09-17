<template>
    <div class="about">
        <h1>This is an about page</h1>
        <c-row>
            <c-col span="8">span: 8</c-col>
            <c-col span="8">span: 8</c-col>
            <c-col span="8">span: 8</c-col>
        </c-row>
        <div circle style="width: 100px; height: 100px; background: red;"></div>
        <ul>
            <li v-for="item in data.list" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>
<script>
import { onMounted, reactive } from 'vue'
import { getRecommendatoryCategorys } from '@/api/mall'

export default {
    setup() {
        const data = reactive({
            list: []
        })

        onMounted(() => {
            getRecommendatoryCategorys().then(res => {
                console.log(res)
                data.list = res.data
            })
        })
        return {
            data
        }
    }
}
</script>
