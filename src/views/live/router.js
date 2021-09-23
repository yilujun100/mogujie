const liveRouter = [
    {
        path: '/live/home',
        name: 'LiveHome',
        component: () => import('./home/home.vue')
    }
]

export default liveRouter
