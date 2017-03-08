import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';


const infoWindowMaker = (marker, markerClose) =>

        <InfoWindow
          onCloseClick={() => markerClose(marker)}
        >
          <div>
            <p style={{fontWeight: 'bold', 'marginBottom': '10px'}}>{marker.name}</p>
            <p>{marker.address_line_1}</p>
            <p>{marker.city}, {marker.postal_code}</p>
          </div>
        </InfoWindow>;

const StoreMap = withGoogleMap((props) =>
   (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    defaultCenter={{lat: props.lat, lng: props.lon}}
    onBoundsChanged={props.onBoundsChanged}
  >
    {
      props.stores ? props.stores.map((marker, index) => (
      <Marker
        key={index}
        position={{lat: marker.latitude, lng: marker.longitude}}
        defaultAnimation={2}
        onClick={() => props.onMarkerClick(marker)}
        onMouseOver={() => props.onMouseOver(marker)}
      >
        { marker.showInfo ? infoWindowMaker(marker, props.onMarkerClose) : '' }
      </Marker>
    )) :
      <Marker
        key={props.store.id}
        position={{lat: 43.6645, lng: -79.3842}}
        defaultAnimation={2}
        onClick={() => props.onMarkerClick(props.store)}
      />
    }
  </GoogleMap>
  )
  );

export default StoreMap;
