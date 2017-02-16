import React, { Component } from 'react';
import { Router, Route, browserHistory} from 'react-router';
import Home from '../containers/home';
import Store from '../containers/store-container';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Router history={browserHistory}>
      		<Route path='/' component={Home}> 
      			<Route path='store' component={Store}/>
      		</Route> 
      	</Router> 
      </div>
    );
  }
}


export default App;
