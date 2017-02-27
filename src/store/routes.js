import React from 'react';
import { Route } from 'react-router';
import Stores from '../containers/stores/stores';
import Nav from '../containers/navigation/navigation';

export default (
  <div>
  	<Route path="" component={ Nav }>
    	<Route path="/" component={ Stores }/>
    </Route>
  </div>
);
