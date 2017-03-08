import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';

import { getStore, formatStore } from '../actions/store';
import { handleMapMounted, handleBoundsChanged, handleMarkerClick, handleMarkerClose } from '../actions/stores';

import StoreMapRenderer from '../components/storemap/single-storemap';
import StoreDetails from '../components/storeDetails/store-details';

const mapStateToProps = (state) => ({
  store: state.store,
});

const mapDispatchToProps = {
  getStore,
  formatStore,
  handleBoundsChanged,
  handleMapMounted,
  handleMarkerClick,
  handleMarkerClose,
};

class Store extends Component {

  componentWillMount() {
    this.props.getStore(this.props.params.id);
  }

  render() {
    return (
      <Grid>
        <Row>
        <Col md={6}>
          <StoreMapRenderer data={this.props} />
        </Col>
        <Col md={6}>
          { this.props.store.storeDetail ? <StoreDetails
            store={this.props.store.storeDetail}
          /> : 'loading'}
        </Col>
        </Row>
      </Grid>
    );
  }
}

Store.propTypes = {
  params: React.PropTypes.object,
  getStore: React.PropTypes.func,
  formatStore: React.PropTypes.func,
  store: React.PropTypes.object,
  handleBoundsChanged: React.PropTypes.func,
  handleMapMounted: React.PropTypes.func,
  handleMarkerClick: React.PropTypes.func,
  handleMarkerClose: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
