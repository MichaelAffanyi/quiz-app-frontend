import {createRouter, createWebHistory} from 'vue-router'
import {beforeEnter} from "@/utils/helpers"


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
            component: () => import("@/views/register.vue"),
            children: [
                {
                    path: 'add-photo',
                    component: () => import("@/views/addPhoto.vue"),
                    beforeEnter
                },
                {
                    path: 'add-purpose',
                    component: () => import("@/views/addPurpose.vue")
                },
                {
                    path: 'add-interest',
                    component: () => import("@/views/addInterest.vue")
                }
            ]
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
                },
                {
                    path: 'profile/quizzes',
                    component: () => import("@/views/quizzes.vue")
                }
            ]
        }
    ],
    scrollBehavior() {
        return {left: 0, top: 0}
    },
    history: createWebHistory()
})

export default router