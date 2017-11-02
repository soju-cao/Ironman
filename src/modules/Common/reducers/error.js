import * as ActionTypes from '../ActionTypes';
import * as PATH from 'constants/storePath';
import { toImmutable } from 'utils/immutableHelpers';

const INITIAL_STATE = toImmutable({
});

function catchGlobalError (state, { error } = {}) {
  return state.setIn([PATH.GLOBAL_ERROR], error);
}

const handlers = {
  [ ActionTypes.CATCH_GLOBAL_ERROR ]: catchGlobalError
};

export default function reducer (state = INITIAL_STATE, action = {}) {
  const handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
}
