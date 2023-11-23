import {createRouter, createWebHistory} from 'vue-router'
import {beforeRegisterEnter, beforeLoginEnter, beforeQuestionsEnter} from "@/utils/helpers"
import {useStore} from "vuex";
import {authApi} from "@/utils";
import {getUser} from "@/utils/helpers";


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
            path: '/auth/login',
            component: () => import("@/views/login.vue"),
            beforeEnter: beforeLoginEnter
        },
        {
            path: '/auth/register',
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
            path: '/auth/reset-password',
            component: () => import("@/views/forgotPassword.vue")
        },
        {
            path: '/auth/reset-password/:token',
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
                    path: 'profile/:quizId/add-question',
                    component: () => import("@/views/addQuestion.vue")
                },
                {
                    path: 'profile/quizzes',
                    component: () => import("@/views/quizzes.vue")
                },
                {
                    path: 'profile/account-settings',
                    component: () => import("@/views/accountSettings.vue")
                },
                {
                    path: 'profile/upload-quiz',
                    component: () => import("@/views/uploadQuiz.vue")
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
                    component: () => import("@/components/quizzes/answersComponent.vue"),
                    beforeEnter: (to, from, next) => {
                        const store = useStore()
                        const {params: {title}} = to
                        const hasAnswers = store.getters.getAnswersData
                        if (!hasAnswers) {
                            next(`/quizzes/${title}`)
                            return
                        }
                        next()
                    }
                },
                {
                    path: ':questionId',
                    component: () => import("@/components/quizzes/questionComponent.vue"),
                    beforeEnter: beforeQuestionsEnter
                }
            ]
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/auth/login"
        }
    ],
    scrollBehavior() {
        return {left: 0, top: 0}
    },
    history: createWebHistory(),
})

router.beforeEach(async (to, from, next) => {
    const store = useStore()
    const hasUser = Object.keys(store.getters.getUser).length > 0
    if (hasUser) {
        next()
        return
    }
    if (to.fullPath.includes('/auth') || to.fullPath === '/') {
        next()
        return
    }
    const res = await getUser()
    // if (!res && to.fullPath === '/') {
    //     next()
    //     return
    // }
    if(res.status && res.status === 200) {
        store.commit('setUser', res?.data?.user)
        next()
    }
    else {
        next('/auth/login')
    }
})

export default router