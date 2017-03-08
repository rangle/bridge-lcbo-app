import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import StoresReducer from './stores';
import NavReducer from './navigation';
import StoreReducer from './store';

const rootReducer = combineReducers({
  stores: StoresReducer,
  routing: routerReducer,
  form: formReducer,
  nav: NavReducer,
  store: StoreReducer,
});

export default rootReducer;
