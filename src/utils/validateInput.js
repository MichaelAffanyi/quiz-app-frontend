
export const validateInput = (inputs, errors) => {
    let isValid = true
    inputs.forEach((input) => {
        if(input.value.value.trim() === '') {
            errors.value[input.name].isError = true
            errors.value[input.name].message = `Please provide ${input.name}`
            isValid = false
        }
    })
    return isValid
}

export const validateOnInput = ({value, name, error}) => {
    if(!value) {
        error.value[name].isError = true
        error.value[name].message = `Please enter ${name}`
    }
    else {
        error.value[name].isError = false
        error.value[name].message = ''
    }
}