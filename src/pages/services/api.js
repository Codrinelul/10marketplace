import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://92.87.185.5/api/',
    withCredentials: true,
});

export default apiClient;