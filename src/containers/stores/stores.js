import React, {Component} from 'react';
<<<<<<< HEAD
import { getStores, setStore, handleMapMounted, handleBoundsChanged, handleMarkerClick, handleMarkerClose, handleMouseOver } from '../../actions/stores';
=======
import { getStores, handleMapMounted, handleBoundsChanged, handleMarkerClick, handleMarkerClose } from '../../actions/stores';
>>>>>>> f8bd9e046454d4e74e7a2141bc8729b001aef384
import {connect} from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';

import StoreMap from '../../components/storemap/storemap.js';
import StoreList from '../../components/storelist/storelist';
<<<<<<< HEAD
// import $ from 'jquery';
=======
>>>>>>> f8bd9e046454d4e74e7a2141bc8729b001aef384

const mapStateToProps = (state) => ({
  stores: state.stores,
  highlightedStoreId: state.stores.highlightedStoreId,
});

const mapDispatchToProps = {
  getStores,
  handleBoundsChanged,
  handleMapMounted,
  handleMarkerClick,
  handleMarkerClose,
  handleMouseOver,
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
<<<<<<< HEAD
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
            onMouseOver={this.props.handleMouseOver}
          />
        </div>
        <StoreList
          highlightedStoreId={this.props.highlightedStoreId}
          stores={this.props.stores.stores}
        />
        <p>{this.props.highlightedStoreId}</p>
      </div>
=======
      <Grid>
        <div>
          <Row>
            <Col xs={12}><h1>FIND A STORE</h1></Col>
            <Col xs={12} sm={6} md={5}>
              <StoreList
                stores={this.props.stores.stores}
              />
            </Col>
            <Col xs={12} sm={6} md={7}>
              <StoreMap
                containerElement={<div style={{ height: '500px', width: '100%' }} /> }
                mapElement={<div style={{ height: '500px', width: '100%' }} />}
                onBoundsChanged={this.props.handleBoundsChanged}
                lat={this.props.stores.lat}
                lon={this.props.stores.lon}
                stores={this.props.stores.stores}
                onMapMounted={this.props.handleMapMounted}
                onMarkerClick={this.props.handleMarkerClick}
                onMarkerClose={this.props.handleMarkerClose}
              />
            </Col>
          </Row>
        </div>
      </Grid>
>>>>>>> f8bd9e046454d4e74e7a2141bc8729b001aef384
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
<<<<<<< HEAD
  handleMarkerHover: React.PropTypes.func,
  handleMouseOver: React.PropTypes.func,
  highlightedStoreId: React.PropTypes.number,
=======

>>>>>>> f8bd9e046454d4e74e7a2141bc8729b001aef384

};

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
