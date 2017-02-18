import React from 'react';


const StoreList = ({stores}) => (<div>
  <h2>Stores near you</h2>
    <ul>
      {stores.map(store =>
        <li>
          <p>address: {store.address_line_1} {store.address_line_2}</p>
          <p>distance: {store.distance_in_meters} km</p>
          <p>telephone: {store.telephone}</p>
        </li>
      )}
    </ul>

</div>);

StoreList.propTypes = {
  stores: React.PropTypes.array,
};

export default StoreList;
