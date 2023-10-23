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

export const setActiveStep = ({commit}, payload) => {
    let active = 1
    switch (payload) {
        case 'add-photo':
            active = 2
            break
        case 'add-purpose':
            active = 3
            break
        case 'add-interest':
            active = 4
            break
        default:
            break
    }
    commit('setStep', active)
}

export const addAnswer = ({commit, rootState}, payload) => {
    const index = rootState.answers.findIndex(answer => answer.id === payload.id)
    if (index === -1) {
        commit('addToAnswers', payload)
    } else {
        commit('replaceAnswer', {index, value: payload})
    }
    // console.log(payload)
}