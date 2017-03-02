import React from 'react';


const StoreDetails = ({store}) => (
  <ul>
    {
      Object.keys(store).map((key) => {
        <li> {store[key]} </li>;
        console.log(store[key]);
      })
    }
  </ul>);

StoreDetails.propTypes = {
  store: React.PropTypes.object,
};

export default StoreDetails;
