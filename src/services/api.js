import axios from "axios"

export const api = axios.create({
    baseURL: 'https://api.metrolisboa.pt:8243/estadoServicoML/1.0.1'
})

api.interceptors.request.use((config) => {
    const token = 'c60aa241-0104-3eb4-8c4a-5d16ba06470f'

    if (token) {
        config.headers = { accept: 'application/json', Authorization: `Bearer ${token}` }

    }

    return config
})