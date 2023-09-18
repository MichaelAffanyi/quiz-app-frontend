import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: () =>  import("@/views/Home.vue")
        }
    ],
    history: createWebHistory()
})

export default router