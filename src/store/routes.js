import React from 'react';
import { Route } from 'react-router';
import Stores from '../containers/stores/stores';
import Home from '../containers/home';
import StoreContainer from '../containers/store-container';

export default (
  <Route path="/" component={ Home }>
    <Route path="stores" component={ Stores }/>
    <Route path="store" component={ StoreContainer }/>
  </Route>
);
