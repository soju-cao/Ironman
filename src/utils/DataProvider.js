import axios from 'axios';
import { API_BASE_URL } from './devConfig';

axios.interceptors.request.use((config) => {
  return {
    ...config,
    url: `${API_BASE_URL}${config.url}`
  };
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  const data = response.data.data;
  return data;
}, (error) => {
  return Promise.reject(error);
});

export default axios;
