import {useStore} from "vuex";
import {authApi, quizApi, settingsApi} from "@/utils/index";
import {validateOnInput} from "@/utils/validateInput";
import gql from "graphql-tag"
import {useRoute} from "vue-router";
import {useQuery} from "@vue/apollo-composable";

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

export const beforeLoginEnter = (to, from, next) => {
    const hasAccess = document.cookie.split(';').some(ele => ele.split("=")[0].trim() === 'accessToken')
    if(hasAccess) {
       next('/dashboard/profile')
    } else {
        next()
    }
}

export const beforeQuestionsEnter = async (to, from, next, update = false) => {
    const store = useStore()
    const {title, questionId} = to.params
    const id = questionId.split('_')[1]
    const quizId = title.split('_')[0]
    try {
        const response = await quizApi(`/${quizId}/${id}`)
        response.data.number = Number(id)
        response.data.question.options = formatOptions(response.data.question.options)
        store.commit('setQuestionData', response?.data)
        // if (update) {
        //
        // }
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
    // console.log(duration)
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

export const setCurrentPage = async ({path, params, page}) => {
    try {
        const routeArr = path.split('/')
        routeArr.pop()
        routeArr.push(`question_${page}`)

        const {title, questionId} = params
        const quizId = title.split('_')[0]
        const response = await quizApi(`/${quizId}/${page}`)

        response.data.number = Number(page)
        response.data.question.options = formatOptions(response.data.question.options)
        return {
            url: routeArr.join("/"),
            data: response?.data
        }
    } catch (e) {
        console.log(e)
    }
}

export const deleteAccount = async ({isLoading, isSuccess, isError}) => {
    try {
        isLoading.value = true
        const res = await settingsApi.delete('/delete-account')
        if(res?.status === 200) {
            isSuccess.value = 'Account deleted successfully'
            isLoading.value = false
            setTimeout(() => {
                location.reload()
            }, 1500)
        }
    } catch (e) {
        isLoading.value = false
        isError.value = e?.response?.data?.error || 'Can\'t delete account now'
    }
}

export const submitAnswer = async ({id, answers}) => {
    const query = gql`
        query($quizId: String!,$answers: [answer!]) {
            submitAnswers(quizId: $quizId, answers: $answers) {
                answers {
                    id
                    question
                    answer
                    status
                    explanation
                    selectedOption
                    point
                    options {
                        tag
                        value
                    }
                }
                percentage
            }
        }
    `
    const variables = {
        quizId: id,
        answers
    }
    const {onResult, result, loading } = await useQuery(query, variables)
    return onResult
}