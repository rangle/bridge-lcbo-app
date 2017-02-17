import React from 'react';
import {connect} from 'react-redux';


class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Im home {this.props.drink.name}</h1>;
  }
}

function mapStateToProps({drink}) {
  return {drink};
}

Home.propTypes = {
  drink: React.PropTypes.shape({
    name: React.PropTypes.string,
  }),
};

export default connect(mapStateToProps)(Home);
