import React from 'react';


const StoreList = ({stores}) => (<div style={{float: 'right', padding: '20px'}}>
  <h2>Stores near you</h2>
    <ul>
      {stores.map(store =>
        <li key={store.id}>
          <p>address: {store.address_line_1} {store.address_line_2}</p>
          <p>distance: {store.distance_in_meters} m</p>
          <p>telephone: {store.telephone}</p>
        </li>
      )}
    </ul>

</div>);

StoreList.propTypes = {
  stores: React.PropTypes.array,
};

export default StoreList;
