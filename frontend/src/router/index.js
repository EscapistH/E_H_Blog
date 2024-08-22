import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home',
        alias: ['/index', '/home'],
        component: () => import('../views/Home.vue')
    },
    {
        path: '/article',
        name: 'User',
        component: () => import('../views/Articles/BaseArticle.vue'),
        children: [
            {
                path: '',
                name: 'ArticleList',
                component: () => import('../views/Articles/ArticleList.vue')
            },{
                path: ':id',
                name: 'ArticleContent',
                component: () => import('../views/Articles/ArticleContent.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router