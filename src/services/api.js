import axios from 'axios';

const api = axios.create({
  baseURL: 'https://3000-fb06826d-6580-403c-ada3-ce536eaf7ac7.ws-us02.gitpod.io',
})

export default api;