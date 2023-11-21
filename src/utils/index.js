import axios from "axios";
const baseURL = `${import.meta.env.VITE_APP_API_URL}/api/v1`
const token = document.cookie?.split(';').find(ele => ele.split("=")[0].trim() === 'accessToken')?.split("=")[1]

export const authApi = axios.create({
    baseURL: `${baseURL}/auth`,
})
export const settingsApi = () => {
    const token = document.cookie?.split(';').find(ele => ele.split("=")[0].trim() === 'accessToken')?.split("=")[1]
    console.log("Token:::", token)
    return axios.create({
        baseURL: `${baseURL}/settings`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}
export const quizApi = axios.create({
    baseURL: `${baseURL}/quizzes`,
    headers: {
        Authorization: `Bearer ${token}`
    }
})