import * as ActionType from '../ActionTypes';

export function catchGlobalError (error) {
  return {
    type: ActionType.CATCH_GLOBAL_ERROR,
    error
  };
}
