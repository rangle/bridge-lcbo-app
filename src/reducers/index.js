import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import DrinkReducer from './selected-drink';

const rootReducer = combineReducers({
  stores: DrinkReducer,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
