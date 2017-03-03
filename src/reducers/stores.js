import {ACTION_TYPES} from '../actions/stores';
// import $ from 'jquery';

const INITIAL_STATE = {
  name: 'Basil Haydens',
  lat: 43.669,
  lon: -79.379,
  test: 'pfff',
  stores: [],
  hoveredStore: '',
  highlightedStoreId: '',
};

export default function(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
  case ACTION_TYPES.setStore:
    return {...state, ...{ test: payload.test}};
  case ACTION_TYPES.getStores:
    return {...state, ...{stores: payload.stores}};
  case ACTION_TYPES.handleBoundsChanged:
    return {...state, ...{lon: payload.lon, lat: payload.lat}};
  case ACTION_TYPES.handleMapMounted:
    return {...state, ...{map: payload.map}};
  case ACTION_TYPES.handleMarkerClick:
    const newstores = state.stores.map(store => (
      store.id === payload.marker.id ? Object.assign({}, store, {showInfo: true}) : store
    ));
    return {...state, ...{stores: newstores}};
  case ACTION_TYPES.handleMarkerClose:
    const newstores2 = state.stores.map(store => (
      store.id === payload.marker.id ? Object.assign({}, store, {showInfo: false}) : store
    ));
    return {...state, ...{stores: newstores2}};
  default:
    return state;
  case ACTION_TYPES.handleMouseOver:
    state.hoveredStore = payload.marker.id;
    return state;
  }
}
