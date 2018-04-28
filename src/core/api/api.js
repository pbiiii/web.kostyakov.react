import axios from 'axios'

export const client = axios.create({
    baseURL: 'http://localhost:4000/api'
})

const onResponseRejected = error => Promise.reject(error)

client.interceptors.response.use(
    onResponseRejected
)

client.defaults.headers.common['Content-Type'] = 'application/json'
client.defaults.headers.common['Accept'] = 'application/json'
