import React from 'react';

export const StoreList = (props) => (<div>
  <h2>Stores near you</h2>
    {props.stores.map(store =>
      <ul>
      <li>address:{store.address_line_1} {store.address_line_2}</li>
      <li>distance:{store.distance_in_meters} km</li>
      <li>telephone:{store.telephone}</li>
    </ul>
    )}

</div>);
