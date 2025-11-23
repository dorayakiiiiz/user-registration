import api from "./api";

const login = async (data) => {
    const response = await api.post('/user/login', data);
    return response.data;
}

const register = async (data) => {
    const response = await api.post('/user/register', data);
    return response.data;
}

export const authService = {
    login, 
    register
};