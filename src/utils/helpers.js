import {useStore} from "vuex";
import {authApi, quizApi} from "@/utils/index";
import {validateOnInput} from "@/utils/validateInput";

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
    const hasAccess = document.cookie.split(';').some(ele => ele.split("=")[0].trim() === 'accessToken')
    if(hasAccess) {
       next('/dashboard/profile')
    } else {
        next()
    }
}

export const beforeQuestionsEnter = async (to, from, next) => {
    const store = useStore()
    const {title, questionId} = to.params
    const id = questionId.split('_')[1]
    const quizId = title.split('_')[0]

    try {
        const response = await quizApi(`/${quizId}/${id}`)
        response.data.number = Number(id)
        response.data.question.options = formatOptions(response.data.question.options)
        store.commit('setQuestionData', response?.data)
    } catch (e) {
        console.log(e)
        next('/dashboard/profile/quizzes')
    }

    next()
}

export const handleInput = (event, error) => {
    // isError.value = false
    const value = event.target.value
    const name = event.target.name
    validateOnInput({value, name, error})
}

export const getQuizzes = async (url) => {
    try {
        const response = await quizApi(url)
        return response?.data
    } catch (e) {
        console.log(e)
    }
}

export const getTimer = (duration) => {
    const minutes = Math.floor((duration % 3600) / 60)
    const hours = Math.floor(duration / 3600)
    const remainingSeconds = duration % 60

    // console.log('hours:::', hours)
    // console.log('Minute:::', minutes)
    // console.log('remainingSeconds:::', remainingSeconds)
    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        remainingSeconds.toString().padStart(2, '0'),
    ].join(":")
}

export const formatOptions = (options) => {
    const tagArr = ['A', 'B', 'C', 'D']
    return options.map((ele, index) => {
        return {
            tag: tagArr[index],
            value: ele
        }
    })
}