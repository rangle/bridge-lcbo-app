import 'whatwg-fetch';

import { LCBO_API_BASE_URL, LCBO_API_KEY } from '../config/api';
import { buildQueryString } from './helpers';

function request(endpoint, method = 'GET', extraHeaders) {
  return fetch(`${LCBO_API_BASE_URL}/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
  }).then(response => response.json());
}

export function get(endpoint, params) {
  const queryString = buildQueryString({
    access_key: LCBO_API_KEY,
    ...params,
  });
  console.log('queryString: ', queryString);
  const url = `${endpoint}?${queryString}`;
  return request(url);
}
