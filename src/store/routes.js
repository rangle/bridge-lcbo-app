import React from 'react';
import { Route } from 'react-router';
import Home from '../containers/home';
import Store from '../containers/store-container';
export default (
  <div>
    <Route path="/" component={ Home } />
    <Route path="store" component={ Store } />
  </div>
);
