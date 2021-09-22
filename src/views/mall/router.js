const mallRouter = [
    {
        path: '/mall/home',
        name: 'MallHome',
        component: () => import('./home/home.vue')
    },
    {
        path: '/mall/store',
        name: 'MallStore',
        component: () => import('./store/store.vue')
    }
]

export default mallRouter
