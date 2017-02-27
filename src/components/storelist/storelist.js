import React from 'react';

import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const StoreList = ({stores}) => (
<div>
  <h2 style={{fontSize: '1.8rem'}}>{stores.length} stores near you</h2>
  <ListGroup>
    {stores.map(store =>
      <ListGroupItem key={store.id} style={{borderLeft: '0px', borderRight: '0px', borderRadius: '0px'}}>
        {console.log(store)}
        <p>address: {store.address_line_1} {store.address_line_2}</p>
        <p>distance: {store.distance_in_meters} m</p>
        <p>telephone: {store.telephone}</p>
        <Button>Store Details</Button>
      </ListGroupItem>
    )}
  </ListGroup>
</div>
);

StoreList.propTypes = {
  stores: React.PropTypes.array,
};

export default StoreList;
