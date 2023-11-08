import {createRouter, createWebHistory} from 'vue-router'
import {beforeRegisterEnter, beforeLoginEnter, beforeQuestionsEnter} from "@/utils/helpers"
import {useStore} from "vuex";
import {authApi} from "@/utils";


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
            component: () => import("@/views/login.vue"),
            beforeEnter: beforeLoginEnter
        },
        {
            path: '/register',
            component: () => import("@/views/register.vue"),
            children: [
                {
                    path: 'add-photo',
                    component: () => import("@/views/addPhoto.vue"),
                    beforeEnter: beforeRegisterEnter
                },
                {
                    path: 'add-purpose',
                    component: () => import("@/views/addPurpose.vue"),
                    beforeEnter: beforeRegisterEnter
                },
                {
                    path: 'add-interest',
                    component: () => import("@/views/addInterest.vue"),
                    beforeEnter: beforeRegisterEnter
                },
                {
                    path: 'off-boarding',
                    component: () => import("@/components/auth/offBoarding.vue"),
                    beforeEnter: beforeRegisterEnter
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
            // beforeEnter: beforeDashboardEnter,
            children: [
                {
                    path: 'profile',
                    component: () => import("@/views/profile.vue")
                },
                {
                    path: 'profile/quizzes',
                    component: () => import("@/views/quizzes.vue")
                },
                {
                    path: 'profile/account-settings',
                    component: () => import("@/views/accountSettings.vue")
                }
            ]
        },
        {
            path: '/quizzes/:title',
            component: () => import("@/views/singleQuiz.vue"),
            children: [
                {
                    path: '',
                    component: () => import("@/components/quizzes/quizOnBoarding.vue")
                },
                {
                    path: 'answers',
                    component: () => import("@/components/quizzes/answersComponent.vue")
                },
                {
                    path: ':questionId',
                    component: () => import("@/components/quizzes/questionComponent.vue"),
                    beforeEnter: beforeQuestionsEnter
                }
            ]
        }
    ],
    scrollBehavior() {
        return {left: 0, top: 0}
    },
    history: createWebHistory(),
})

router.beforeEach(async (to, from, next) => {
    const store = useStore()
    try {
        const res = await authApi('/showMe')
        store.commit('setUser', res?.data?.user)
        if(res?.status === 200) {
            next()
        }
    } catch (e) {
        next('/login')
    }
})

export default router