import React, {Component} from 'react';
import StoreMap from '../../components/storemap/storemap.js';

export default class Stores extends Component {
  render() {
    return (
      <div>
        <h1>Stores</h1>
        <StoreMap
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
