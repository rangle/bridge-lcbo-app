import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const StoreMap = withGoogleMap(() => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
));

export default StoreMap;
