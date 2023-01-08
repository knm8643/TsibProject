import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "/home" */ '@/components/HelloWorld.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import(/* webpackChunkName: "/main" */ '@/components/mainPage.vue')
    },
    {
        path: '/credit',
        name: 'credit',
        component: () => import(/* webpackChunkName: "/credit" */ '@/components/CreditPage.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "/login" */ '@/components/LoginPage.vue')
    },
    {
        path: '/mypage',
        name: 'mypage',
        component: () => import(/* webpackChunkName: "/mypage" */ '@/components/MyPage.vue')
    },
    {
        path: '/post',
        name: 'post',
        component: () => import(/* webpackChunkName: "/post" */ '@/components/PostPage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;