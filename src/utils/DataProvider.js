import axios from 'axios';
import { API_BASE_URL } from './devConfig';
import { catchGlobalError } from 'src/modules/Common/actions/error';
import { store } from 'src/Root';

axios.interceptors.request.use((config) => {
  return {
    ...config,
    url: `${API_BASE_URL}${config.url}`
  };
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  const error = response.data.error;
  store.dispatch(catchGlobalError(error));

  const data = response.data.data;
  return data;
}, (error) => {
  return Promise.reject(error);
});

export default axios;
