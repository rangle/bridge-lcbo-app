import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import StoreReducer from './stores';

const rootReducer = combineReducers({
  stores: StoreReducer,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
