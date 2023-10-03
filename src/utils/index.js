import axios from "axios";
const baseURL = '/api/v1'

export const authApi = axios.create({
    baseURL,
})