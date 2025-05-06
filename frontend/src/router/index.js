import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home',
        alias: ['/index', '/home'],
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/article',
        name: 'Article',
        children: [
            {
                path: '',
                name: 'ArticleList',
                component: () => import('@/views/Articles/ArticleList.vue')
            }, {
                path: ':id',
                name: 'ArticleContent',
                component: () => import('@/views/Articles/ArticleContent.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import('@/views/404.vue'),
        meta: {
            title: '哦豁，页面好像不存在啊'
        }
    },
    {
        path: "/:pathMatch(.*)",
        redirect: "/404",
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from) => {
    // 设置页面标题
    document.title = to.meta?.title || 'HeSir的小站' // 优先使用路由meta中的标题，否则使用默认标题
})

export default router