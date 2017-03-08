import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import StoreInfo from '../storeInfo/storeInfo';

const styles = {
  listGroup: {
    borderLeft: '0px',
    borderRight: '0px',
    borderRadius: '0px',
  },
};

const StoreList = ({stores, highlightedStoreId}) => (
<div>
  <h2 style={{fontSize: '1.8rem'}}>{stores.length} stores near you</h2>
  <ListGroup>
    {stores.map(store =>
      <ListGroupItem key={store.id} style={store.showInfo ? {...styles.listGroup, backgroundColor: '#eee'} : {...styles.listGroup}}>
        <StoreInfo
          store = {store}
          key = {store.id}
          highlighted = {highlightedStoreId}
        />
        <Button><Link to={`/store/${store.id}`}>Store Details</Link></Button>
      </ListGroupItem>
    )}
  </ListGroup>
</div>
);

StoreList.propTypes = {
  stores: React.PropTypes.array,
  highlightedStoreId: React.PropTypes.number,
};

export default StoreList;
