import { ACTION_TYPES } from '../actions/store';

const INITIAL_STATE = {
  store: {},
};

export default function(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
  case ACTION_TYPES.getStore:
    return {...state, ...{store: payload.storeDetails}};
  default:
    return state;
  }
}
