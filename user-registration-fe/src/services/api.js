import axios from 'axios'

// const API_URL = 'http://localhost:5000';
const API_URL = 'https://23120197-user-registration-be.vercel.app';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
    timeout: 30000
});

export default api;