import React from 'react';
import StoreMap from './storemap';


const StoreMapRenderer = ({data}) => {
  return data.store.latitude ? <StoreMap
    containerElement={<div style={{ height: '500px', width: '100%' }} /> }
    mapElement={<div style={{ height: '500px', width: '100%' }} />}
    onBoundsChanged={data.handleBoundsChanged}
    lat={data.store.latitude}
    lon={data.store.longitude}
    store={data.store}
    onMapMounted={data.handleMapMounted}
    onMarkerClick={data.handleMarkerClick}
    onMarkerClose={data.handleMarkerClose}
  /> : <h3>loading</h3>;
};

StoreMapRenderer.propTypes = {
  data: React.PropTypes.object,
};

export default StoreMapRenderer;
