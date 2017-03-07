import React from 'react';
import { Route } from 'react-router';
import Stores from '../containers/stores/stores';
import Nav from '../containers/navigation/navigation';
import Store from '../containers/store-container';

export default (
  <div>
  	<Route path="/" component={ Nav }>
    	<Route path="/stores" component={ Stores }/>
    	<Route path="/storeDetail" component={ Store }/>
    </Route>
  </div>
);
