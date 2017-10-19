import * as ActionType from '../ActionTypes';
import * as API from '../api';

export function saveStoryItem (params) {
  return async (dispatch) => {
    // Returns a promise
    return await API.saveStoryItem(params)
      .then(response => {
        dispatch( {
          type: ActionType.SAVE_STORY_ITEM,
          response
        });
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function fetchStoryList (params) {
  return async (dispatch) => {
    // Returns a promise
    return await API.fetchStoryList(params)
      .then(response => {
        dispatch( {
          type: ActionType.FETCH_STORY_LIST,
          response
        });
      })
      .catch(error => {
        throw (error);
      });
  };
}
