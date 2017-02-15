import React from 'react';
import { Route } from 'react-router';
import App from '../app/app.js';
import Map from '../containers/map/map.js';

export default (
  <div>
    <Route path="/" component={ App }/>
    <Route path="/map" component={ Map }/>
  </div>
);
