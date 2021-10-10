import axios from 'axios'

export const API_URL = 'http://194.67.113.25:8080/api'

export const API = axios.create({
    // baseURL: `http://${window.location.host}/api`,
    baseURL: `http://194.67.113.25:8080/api`,
    timeout: 3000,
    withCredentials: true,
    headers: {
        // 'Referrer-Policy': 'no-referrer',
        'Access-Control-Allow-Origin': '*'
    }
})
