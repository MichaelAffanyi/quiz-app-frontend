
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

export const updateImage = (state, payload) => {
    state.user.profilePhoto = payload
}