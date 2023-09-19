import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: () =>  import("@/views/Home.vue")
        },
        {
            path: '/auth',
            component: () => import("@/views/auth.vue")
        }
    ],
    history: createWebHistory()
})

export default router