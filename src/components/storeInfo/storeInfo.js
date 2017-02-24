import React from 'react';

const StoreInfo = ({store}) =>
(  <li className = "storeInfo" key = {store.id}>
    <p>address: {store.address_line_1} {store.address_line_2}</p>
    <p>distance: {store.distance_in_meters} m</p>
    <p>telephone: {store.telephone}</p>
  </li>
);

StoreInfo.propTypes = {
  store: React.PropTypes.shape({
    id: React.PropTypes.integer,
    address: React.PropTypes.string,
    distance: React.PropTypes.integer,
    telephone: React.PropTypes.string,
  }),
};

export default StoreInfo;
