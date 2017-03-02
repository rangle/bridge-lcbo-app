import React, { Component } from 'react';
import { getStore } from '../actions/store';
import {connect} from 'react-redux';

import StoreDetails from '../components/storeDetails/store-details';

const mapStateToProps = (state) => ({
  store: state.store,
});

const mapDispatchToProps = {
  getStore,
};

class Store extends Component {
  componentDidMount() {
    this.props.getStore(411);
  }

  render() {
    return (
      <StoreDetails store={this.props.store.store}/>
    );
  }
}

Store.propTypes = {
  getStore: React.PropTypes.func,
  store: React.PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
