import rest from 'utils/DataProvider';

const API_PATHS = {
  GET_PUBLIC_KEY: 'publicKey',
  LOGIN: 'login',
  REGISTER: 'register'
};

export const register = async (params) => {
  return await rest.post(API_PATHS.REGISTER, params);
};

export const getPublicKey = async (params) => {
  return await rest.get(API_PATHS.GET_PUBLIC_KEY, params);
};

export const login = async (params) => {
  return await rest.post(API_PATHS.LOGIN, params);
};

