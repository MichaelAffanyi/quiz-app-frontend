import login from "@/components/auth/loginComponent.vue"
import register from "@/components/auth/registerComponent.vue"

export const setActive = ({commit}, payload) => {
    let component = null
    switch (payload) {
        case 'login':
            component = login
        break;
        case  'register':
            component = register
        break;
    }
    commit('setActiveComponent', component)
}

export const registerUser = () => {

}