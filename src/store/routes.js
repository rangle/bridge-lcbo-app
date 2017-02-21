import React from 'react';
import { Route } from 'react-router';
import App from '../app/app.js';
import Stores from '../containers/stores/stores';

export default (
  <div>
    <Route path="/" component={ App }/>
    <Route path="/stores" component={ Stores }/>
  </div>
);
