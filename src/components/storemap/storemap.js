import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const StoreMap = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    defaultCenter={{lat: props.lat, lng: props.lon}}
    onBoundsChanged={props.onBoundsChanged}
  >
    {props.stores.map((marker, index) => (
      <Marker
        key={index}
        position={{lat: marker.latitude, lng: marker.longitude}}
        defaultAnimation={2}
      />
    ))}
  </GoogleMap>
));

export default StoreMap;
