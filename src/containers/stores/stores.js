import React, {Component} from 'react';
import { getStores, handleMapMounted, handleBoundsChanged, handleMarkerClick, handleMarkerClose } from '../../actions/stores';
import {connect} from 'react-redux';
import StoreMap from '../../components/storemap/storemap.js';
import StoreList from '../../components/storelist/storelist';

const mapStateToProps = (state) => ({
  stores: state.stores,
});

const mapDispatchToProps = {
  getStores,
  handleBoundsChanged,
  handleMapMounted,
  handleMarkerClick,
  handleMarkerClose,
};

class Stores extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getStores(this.props.stores.lat, this.props.stores.lon);
  }

  render() {
    return (
      <div>
        <div id="mapWrapper" style={{float: 'left'}}>
          <h1>Stores</h1>
          <StoreMap
            containerElement={<div style={{ height: '500px', width: '500px' }} /> }
            mapElement={<div style={{ height: '500px', width: '500px' }} />}
            onBoundsChanged={this.props.handleBoundsChanged}
            lat={this.props.stores.lat}
            lon={this.props.stores.lon}
            stores={this.props.stores.stores}
            onMapMounted={this.props.handleMapMounted}
            onMarkerClick={this.props.handleMarkerClick}
            onMarkerClose={this.props.handleMarkerClose}
          />
        </div>
        <StoreList
          stores={this.props.stores.stores}
        />
      </div>
    );
  }
}

Stores.propTypes = {
  stores: React.PropTypes.shape({
    name: React.PropTypes.string,
    test: React.PropTypes.string,
    stores: React.PropTypes.array,
    lat: React.PropTypes.number,
    lon: React.PropTypes.number,

  }),
  getStores: React.PropTypes.func,
  setStore: React.PropTypes.func,
  handleBoundsChanged: React.PropTypes.func,
  handleMapMounted: React.PropTypes.func,
  handleMarkerClick: React.PropTypes.func,
  handleMarkerClose: React.PropTypes.func,


};

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
