import React, {Component} from 'react';
import { handleToggle, handleClose, handleChange } from '../../actions/navigation';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import IconHome from 'material-ui/svg-icons/action/home';
import IconLoyalty from 'material-ui/svg-icons/action/loyalty';

const mapStateToProps = (state) => ({
  nav: state.nav,
});

const mapDispatchToProps = {
  handleToggle,
  handleClose,
  handleChange,
};

class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <AppBar
          title="LCBO"
          onLeftIconButtonTouchTap={this.props.handleToggle}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.props.nav.open}
          onRequestChange={(open) => this.props.handleChange(open)}
          >
          <MenuItem
            containerElement={<Link to="/" />}
            onTouchTap={this.props.handleClose}
            primaryText="Home"
            leftIcon={<IconHome />}
          />
          <MenuItem
            containerElement={<Link to="/stores" />}
            onTouchTap={this.props.handleClose}
            primaryText="Stores"
            leftIcon={<IconLoyalty />}
          />
        </Drawer>
        {this.props.children}
      </div>
    );
  }
}

Navigation.propTypes = {
  nav: React.PropTypes.shape({
    open: React.PropTypes.bool,
  }),
  children: React.PropTypes.element.isRequired,
  handleToggle: React.PropTypes.func,
  handleClose: React.PropTypes.func,
  handleChange: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

