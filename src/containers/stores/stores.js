import React, {Component} from 'react';
import { getStores, setStore } from '../../actions/stores';
import {connect} from 'react-redux';
import StoreMap from '../../components/storemap/storemap.js';

const mapStateToProps = (state) => ({
  stores: state.stores,
});

const mapDispatchToProps = {
  getStores,
  setStore,
};

class Stores extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getStores();
    this.props.setStore();
  }

  render() {
    return (
      <div>
        <h1>Stores</h1>
        <div>
          {console.log('STORES', this.props.stores)}
        </div>
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

Stores.propTypes = {
  stores: React.PropTypes.shape({
    name: React.PropTypes.string,
    test: React.PropTypes.string,
    stores: React.PropTypes.array,
  }),
  getStores: React.PropTypes.func,
  setStore: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
