import React from 'react';
import StoreInfo from '../storeInfo/storeInfo';
// import { Marker } from 'react-google-maps';


const StoreList = ({stores, highlightedStoreId}) => (<div style={{float: 'right', padding: '20px'}}>
  <h2>Stores near you</h2>
    <ul>
      {stores.map(store =>
        <StoreInfo
          store = {store}
          key = {store.id}
          highlighted = {highlightedStoreId}
        />
      )}
    </ul>
    <p>{highlightedStoreId}</p>

</div>);

StoreList.propTypes = {
  stores: React.PropTypes.array,
  highlightedStoreId: React.PropTypes.number,
};

export default StoreList;
