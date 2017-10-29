import * as ActionTypes from '../ActionTypes';
import * as PATH from 'constants/storePath';
import { toImmutable } from 'utils/immutableHelpers';

const INITIAL_STATE = toImmutable({
});

function getPublicKey (state, { response } = {}) {
  return state.setIn([PATH.PUBLIC_KEY], response);
}

const handlers = {
  [ ActionTypes.GET_PUBLIC_KEY ]: getPublicKey
};

export default function packagesReducer (state = INITIAL_STATE, action = {}) {
  const handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
}

