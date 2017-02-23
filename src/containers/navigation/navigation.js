import React, {Component} from 'react';

export default class Navigation extends Component {
  constructor() {
    super();  
  }

  render() {
    return (
      <div>
        <h1>Navigation</h1>
        {this.props.children}
      </div>
    )
  }
}

Home.propTypes = {
  drink: React.PropTypes.shape({
    name: React.PropTypes.string,
  }),
};
