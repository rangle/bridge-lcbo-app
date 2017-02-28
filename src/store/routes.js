import React from 'react';
import { Route } from 'react-router';
import App from '../app/app.js';
import Stores from '../containers/stores/stores';
import Nav from '../containers/navigation/navigation';

import Home from '../containers/home';
import Store from '../containers/store-container';
export default (
  <div>
  	<Route path="" component={ Nav }>
    	<Route path="/" component={ App }/>
    	<Route path="/stores" component={ Stores }/>
    </Route>
  </div>
);
