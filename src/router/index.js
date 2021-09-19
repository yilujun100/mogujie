import { createRouter, createWebHashHistory } from 'vue-router'
import mallRouter from '@/views/mall/router.js'

const routes = [...mallRouter]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
