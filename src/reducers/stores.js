import {ACTION_TYPES} from '../actions/stores';

const INITIAL_STATE = {
  name: 'Basil Haydens',
  test: 'pfff',
  stores: [],
};

export default function(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
  case ACTION_TYPES.setStore:
    return {...state, ...{test: payload.test}};
  case ACTION_TYPES.getStores:
    console.log('PAYLOAD', payload); // payload = UNDEFINED
    return {...state, ...{stores: payload.stores}};
  default:
    return state;
  }
}
