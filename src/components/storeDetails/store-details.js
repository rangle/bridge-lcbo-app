import React from 'react';
import Moment from 'react-moment';

const StoreDetails = ({store}) => (
  <div>
    <h3>{store.name}</h3>
      <p>{store.address}</p>
      <p>{store.telephone}</p>
      <div className="storeHour-Table">
        <h5><b>Store Hours</b></h5>
        <div>Monday: {store.store_hours.monday}</div>
        <div>tuesday: {store.store_hours.tuesday}</div>
        <div>Wednesday: {store.store_hours.wednesday}</div>
        <div>Thursday: {store.store_hours.thursday}</div>
        <div>Friday: {store.store_hours.friday}</div>
        <div>Saturday: {store.store_hours.saturday}</div>
        <div>Sunday: {store.store_hours.sunday}</div>
      </div>
      <div>
        <h5> accessibility </h5>
      </div>
    <p><Moment parse="YYYY-MM-DD HH:mm">{store.updated_at}</Moment></p>
  </div>);

StoreDetails.propTypes = {
  store: React.PropTypes.object,
};

export default StoreDetails;
