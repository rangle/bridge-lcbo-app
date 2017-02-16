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
    return {...state, ...{stores: payload.stores}};
  case ACTION_TYPES.handleBoundsChanged:
    return {...state, ...{lon: payload.lon, lat: payload.lat}};
  case ACTION_TYPES.handleMapMounted:
    return {...state, ...{map: payload.map}};
  case ACTION_TYPES.handleMarkerClick:
    console.log('marker click');
    state.stores.map(store => (
      store.id === payload.marker.id ? Object.assign({}, store, {showInfo: true}) : store
    ));
    // console.log(state.stores);
    // console.log('MARKER', payload.marker);
    // return state.stores.map(store => {
    //   if (store.id === payload.marker.id) {
    //     store.showInfo = true;
    //     console.log('showInfo', store.showInfo);
    //     Object.assign({}, store, {showInfo: true});
    //     console.log('showInfo', store.showInfo);
    //   }
    //   // store.id === payload.marker.id ? Object.assign({}, store, {showInfo: true}) : store
    // });
    // console.log(state.stores);
    // return {...state, ...{map: payload.map}};
    // state.stores.map(store => ());
    return state;
  default:
    return state;
  }
}
