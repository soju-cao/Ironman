import * as ActionTypes from '../ActionTypes';
import * as PATH from 'constants/storePath';
import { toImmutable } from 'utils/immutableHelpers';

const INITIAL_STATE = toImmutable({
  [PATH.STORY_LIST]: [],
});

function fetchStoryList (state, { response } = {}) {
  return state.setIn([PATH.STORY_LIST], response);
}

const handlers = {
  [ ActionTypes.FETCH_STORY_LIST ]: fetchStoryList
};

export default function packagesReducer (state = INITIAL_STATE, action = {}) {
  const handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
}

