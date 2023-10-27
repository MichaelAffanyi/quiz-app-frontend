
export const setActiveComponent = (state, payload) => {
    state.activeComponent = payload
}

export const setUser = (state, payload) => {
    state.user = payload
}

export const setIsRegistered = (state, payload) => {
    state.isRegistered = payload
}

export const setStep = (state, payload) => {
    state.step = payload
}

export const toggleDeleteModal = (state) => {
    state.openDeleteModal = !state.openDeleteModal
}

export const toggleSubmitAnswerModal = (state) => {
    state.openSubmitAnswer = !state.openSubmitAnswer
}

export const updateImage = (state, payload) => {
    state.user.profilePhoto = payload
}

export const setQuestionData = (state, payload) => {
    state.questionData = payload
}

export const addToAnswers = (state, payload) => {
    state.answers = [...state.answers, payload]
}

export const replaceAnswer = (state, payload) => {
    state.answers[payload.index] = payload.value
}

export const setAnswersData = (state, payload) => {
    state.answersData = payload
}