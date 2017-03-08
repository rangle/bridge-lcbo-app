import React from 'react';
<<<<<<< HEAD
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
=======
import { Link } from 'react-router';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const styles = {
  listGroup: {
    borderLeft: '0px',
    borderRight: '0px',
    borderRadius: '0px',
  },
};

const StoreList = ({stores}) => (
<div>
  <h2 style={{fontSize: '1.8rem'}}>{stores.length} stores near you</h2>
  <ListGroup>
    {stores.map(store =>
      <ListGroupItem key={store.id} style={store.showInfo ? {...styles.listGroup, backgroundColor: '#eee'} : {...styles.listGroup}}>
        <p>address: {store.address_line_1} {store.address_line_2}</p>
        <p>distance: {store.distance_in_meters} m</p>
        <p>telephone: {store.telephone}</p>
        <Button><Link to={`/store/${store.id}`}>Store Details</Link></Button>
      </ListGroupItem>
    )}
  </ListGroup>
</div>
);

StoreList.propTypes = {
  stores: React.PropTypes.array,
>>>>>>> f8bd9e046454d4e74e7a2141bc8729b001aef384
};

export default StoreList;
