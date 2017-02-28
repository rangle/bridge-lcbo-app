import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import StoreReducer from './stores';
import NavReducer from './navigation';

const rootReducer = combineReducers({
  stores: StoreReducer,
  routing: routerReducer,
  form: formReducer,
  nav: NavReducer,
});

export default rootReducer;
