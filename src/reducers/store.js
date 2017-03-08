import { ACTION_TYPES } from '../actions/store';

const INITIAL_STATE = {
  store: {},
};

export default function(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
  case ACTION_TYPES.getStore:
    return {...state, ...payload.storeDetails};
  case ACTION_TYPES.formatStore:
   	return { ...state, ...{storeDetail: payload.storeInfo}};
  default:
    return state;
  }
}
