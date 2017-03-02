import React from 'react';


const StoreDetails = ({store}) => (
  <div>
    <h1> {store.name} </h1>
    <ul key={store.id}>
      {
        Object.keys(store).map((key) => {
          return (<li> {key}: {store[key]} </li>);
        })
      }
    </ul>
  </div>);

StoreDetails.propTypes = {
  store: React.PropTypes.object,
};

export default StoreDetails;
