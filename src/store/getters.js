
export const getActiveComponent = (state) => {
    return state.activeComponent
}

export const getUser = (state) => {
   return state.user
}

export const isRegistered = (state) => {
    return state.isRegistered
}

export const getStep = (state) => {
    return state.step
}

export const isDeleteModalOpen = (state) => {
    return state.openDeleteModal
}

export const isSubmitAnswerModalOpen = (state) => {
    return state.openSubmitAnswer
}

export const getQuestion = (state) => {
    return state.questionData
}

export const getAnswers = (state) => {
    return state.answers
}

export const getAnswersData = (state) => {
    return state.answersData
}

export const getSingleQuiz = (state) => {
    return state.singleQuiz
}