import {ACTION_TYPES} from '../actions/stores';

const INITIAL_STATE = {
  name: 'Basil Haydens',
  lat: 43.669,
  lon: -79.379,
  test: 'pfff',
  stores: [],
};

export default function(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
  case ACTION_TYPES.setStore:
    return {...state, ...{test: payload.test}};
  case ACTION_TYPES.getStores:
    console.log('GET STORES at');
    console.log(state);
    return {...state, ...{stores: payload.stores}};
  case ACTION_TYPES.handleBoundsChanged:
    console.log('LAT', payload.lat);
    console.log('LON', payload.lon);
    return {...state, ...{lon: payload.lon, lat: payload.lat}};
  case ACTION_TYPES.handleMapMounted:
    return {...state, ...{map: payload.map}};
  default:
    return state;
  }
}
