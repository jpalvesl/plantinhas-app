import axios from 'axios';

const api = axios.create({
  baseURL: 'https://plantinhas-backend.herokuapp.com',
})

export default api;