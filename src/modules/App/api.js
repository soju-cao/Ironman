import rest from '../../utils/DataProvider';

const API_PATHS = {
  GET_PUBLIC_KEY: 'publicKey',
  LOGIN: 'login',
  REGISTER: 'register',
  SAVE_STORY_ITEM: 'article/save',
  FETCH_ARTICLE_LIST: 'article/all',
  DELETE_STORY_ITEM: 'article/delete'
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

export const saveStoryItem = async (params) => {
  return await rest.post(API_PATHS.SAVE_STORY_ITEM, params);
};

export const fetchStoryList = async (params) => {
  return await rest.post(API_PATHS.FETCH_ARTICLE_LIST, params);
};

export const deleteStoryItem = async (params) => {
  return await rest.post(API_PATHS.DELETE_STORY_ITEM, params);
};
