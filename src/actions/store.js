import $ from 'jquery';
import { LCBO_API_BASE_URL, LCBO_API_KEY } from '../config/api';
import { buildQueryString } from '../api/helpers';

export const ACTION_TYPES = {
  getStore: 'GET_STORE',
  formatStore: 'FORMAT_DETAILS',
};

export function retrieveStore(storeInfo) {
  return {
    type: ACTION_TYPES.getStore,
    payload: {
      storeDetails: storeInfo,
    },
  };
}

export function getStore(storeId) {
  const queryString = buildQueryString({
    access_key: LCBO_API_KEY,
  });
  return (dispatch) => {
    return $.get(`${LCBO_API_BASE_URL}/stores/${storeId}?${queryString}`)
    .then(
      response => {
        console.log(response.result);
        dispatch(retrieveStore(response.result));
      },
    ).then(
      ()=> {
        dispatch(formatStore());
      },
    );
  };
}

function msmTo24time(msm) {
  const hour = msm / 60;
  let mins = msm % 60;
  if (mins === 0) {
    mins = '00';
  }
  return (hour + ':' + mins);
}

function formatStoreHours(getState) {
  const hours = getState().store;
  const formatedHours = {};
  Object.keys(hours).forEach((key) => {
    if ( (key.indexOf('_open') > -1) || (key.indexOf('_close') > -1)) {
      const formattedTime = msmTo24time(hours[key]);
      const obj = {
        [key]: formattedTime,
      };
      Object.assign(formatedHours, obj);
    }
  });
  return formatedHours;
}
export function formatStore() {
  return (dispatch, getState) => {
    const state = getState();
    const formattedHours = formatStoreHours(getState);
    const storeInfo = {
      name: state.store.name,
      address: state.store.address_line_1 + ', ' + state.store.city + ', ' + state.store.postal_code,
      telephone: state.store.telephone,
      store_number: state.store.store_number,
      store_hours: {
        monday: formattedHours.monday_open + '-' + formattedHours.monday_close,
        tuesday: formattedHours.tuesday_open + '-' + formattedHours.tuesday_close,
        wednesday: formattedHours.wednesday_open + '-' + formattedHours.wednesday_close,
        thursday: formattedHours.thursday_open + '-' + formattedHours.thursday_close,
        friday: formattedHours.friday_open + '-' + formattedHours.friday_close,
        saturday: formattedHours.saturday_open + '-' + formattedHours.saturday_close,
        sunday: formattedHours.sunday_open + '-' + formattedHours.sunday_close,
      },
      has_wheelchair_accessability: state.store.has_wheelchair_accessability,
      has_bilingual_services: state.store.has_bilingual_services,
      has_product_consultant: state.store.has_product_consultant,
      has_tasting_bar: state.store.has_tasting_bar,
      has_beer_cold_room: state.store.has_beer_cold_room,
      has_special_occasion_permits: state.store.has_special_occasion_permits,
      has_vintages_corner: state.store.has_vintages_corner,
      has_parking: state.store.has_parking,
      has_transit_access: state.store.has_transit_access,
      updated_at: state.store.updated_at,
    };

    dispatch({
      type: ACTION_TYPES.formatStore,
      payload: {
        storeInfo: storeInfo,
      },
    });
  };
}
