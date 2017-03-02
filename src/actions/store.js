import $ from 'jquery';
import { LCBO_API_BASE_URL, LCBO_API_KEY } from '../config/api';
import { buildQueryString } from '../api/helpers';

export const ACTION_TYPES = {
  getStore: 'GET_STORE',
};

export function getStore(storeId) {
  const queryString = buildQueryString({
    access_key: LCBO_API_KEY,
  });

  const thunk = (dispatch) => {
    stores: $.get(`${LCBO_API_BASE_URL}/stores/${storeId}?${queryString}`).then(
      response => {
        // console.log('result', responsex/.result);
        dispatch({
          type: ACTION_TYPES.getStore,
          payload: {
            storeDetails: response.result,
          },
        });
      },
    );
  };

  thunk.meta = {
    debounce: {
      time: 300,
      key: 'myAction',
    },
  };

  return thunk;
}
