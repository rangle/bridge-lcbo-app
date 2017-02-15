import $ from 'jquery';
import { LCBO_API_BASE_URL, LCBO_API_KEY } from '../config/api';

export const ACTION_TYPES = {
  getStores: 'GET_STORES',
  setStore: 'SET_STORE',
};

export function setStore() {
  return {
    type: ACTION_TYPES.setStore,
    payload: {
      test: 'test',
    },
  };
}

export function getStores() {
  return function(dispatch) {
    pokemon: $.get(`${LCBO_API_BASE_URL}/stores?access_key=${LCBO_API_KEY}`).then(
      response => {
        dispatch({
          type: ACTION_TYPES.getStores,
          payload: {
            stores: response.results,
          },
        });
      }
    );
  };
}
