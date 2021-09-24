import { createRouter, createWebHashHistory } from 'vue-router'
import mallRouter from '@/views/mall/router.js'
import promotionRouter from '@/views/promotion/router.js'
import liveRouter from '@/views/live/router.js'
import meRouter from '@/views/me/router.js'

const routes = [...mallRouter, ...promotionRouter, ...liveRouter, ...meRouter]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
