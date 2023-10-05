import {useStore} from "vuex";
import {authApi} from "@/utils/index";

export const beforeRegisterEnter = (to, from, next) => {
    const store = useStore()
    const isRegistered = store.getters.isRegistered
    if(!isRegistered) {
        next('/register')
    }
    else {
        next()
    }
}

export const beforeDashboardEnter = async (to, from, next) => {
    const store = useStore()
    try {
        const res = await authApi('/showMe')
        console.log(res)
        store.commit('setUser', res?.data?.user)
        if(res?.status === 200) {
            next()
        }
    } catch (e) {
        next('/login')
    }
    // console.log(res)
    // const store = useStore()
    // const user = store.getters.getUser
    // console.log(!user)
    // if(Object.keys(user).length < 1) {
    //     console.log(user)
    //     next('/login')
    // } else {
    //     next()
    // }
}

export const beforeLoginEnter = (to, from, next) => {
    const hasAccess = document.cookie.split(';').some(ele => ele.split("=")[0] === 'accessToken')
    if(hasAccess) {
       next('/dashboard/profile')
    } else {
        next()
    }
}