import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/GBobello/nlw5-plantmanager',
})

export default api;