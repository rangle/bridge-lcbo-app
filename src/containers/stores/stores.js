import React, {Component} from 'react';
import { getStores, handleMapMounted, handleBoundsChanged, handleMarkerClick, handleMarkerClose, handleMouseOver } from '../../actions/stores';
import {connect} from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';

import StoreMap from '../../components/storemap/storemap.js';
import StoreList from '../../components/storelist/storelist';

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
      <Grid>
        <div>
          <Row>
            <Col xs={12}><h1>FIND A STORE</h1></Col>
            <Col xs={12} sm={6} md={5}>
              <StoreList
                stores={this.props.stores.stores}
                highlightedStoreId={this.props.highlightedStoreId}
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
                onMouseOver={this.props.handleMouseOver}
              />
            </Col>
          </Row>
        </div>
      </Grid>
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
  handleMarkerHover: React.PropTypes.func,
  handleMouseOver: React.PropTypes.func,
  highlightedStoreId: React.PropTypes.number,


};

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
