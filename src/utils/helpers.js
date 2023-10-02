import {useStore} from "vuex";

export const beforeEnter = (to, from, next) => {
    const store = useStore()
    const isRegistered = store.getters.isRegistered
    if(!isRegistered) {
        next('/register')
    }
    else {
        next()
    }
}