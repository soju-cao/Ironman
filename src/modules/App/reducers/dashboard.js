import * as ActionTypes from '../ActionTypes';
import * as Path from 'constants/storePath';
import { toImmutable } from 'utils/immutableHelpers';

const INITIAL_STATE = toImmutable({
});

function getActionDetails (state, { response } = {}) {
  return state.setIn([Path.PUBLIC_KEY], response);
}

const handlers = {
  [ ActionTypes.GET_APP_DETAILS ]: getActionDetails
};

export default function packagesReducer (state = INITIAL_STATE, action = {}) {
  const handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
}

