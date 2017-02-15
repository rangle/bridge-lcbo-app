import React, {Component} from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const SimpleMapExampleGoogleMap = withGoogleMap(() => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
));

export default class StoreMap extends Component {

  render() {
    return (
      <div>
        <h1>hello</h1>
        <SimpleMapExampleGoogleMap
	        containerElement={
	          <div style={{ height: '500px', width: '500px' }} />
	        }
	        mapElement={
	          <div style={{ height: '500px', width: '500px' }} />
	        }
	      />
      </div>
    );
  }

}


