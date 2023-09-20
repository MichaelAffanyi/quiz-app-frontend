import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: () =>  import("@/views/Home.vue")
        },
        {
            path: '/auth',
            component: () =>  import("@/views/auth.vue")
        },
        {
            path: '/login',
            component: () => import("@/views/login.vue")
        },
        {
            path: '/register',
            component: () => import("@/views/register.vue")
        },
        {
            path: '/reset-password',
            component: () => import("@/views/forgotPassword.vue")
        },
        {
            path: '/reset-password/:token',
            component: () => import("@/views/resetPassword.vue")
        },
        {
            path: '/dashboard',
            component: () => import('@/views/dashboard.vue'),
            children: [
                {
                    path: 'profile',
                    component: () => import("@/views/profile.vue")
                }
            ]
        }
    ],
    history: createWebHistory()
})

export default router