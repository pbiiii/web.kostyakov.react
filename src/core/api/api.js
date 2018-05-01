import axios from 'axios'

export const client = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'access_token' : localStorage.getItem('token') || null
    }
})
const onResponseFulfilled = config => config
const onResponseRejected = error => Promise.reject(error)

client.interceptors.response.use(
    onResponseFulfilled,
    onResponseRejected
)