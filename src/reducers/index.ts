import { combineReducers } from 'redux';
import homeReducer from './home';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
  homeReducer,
  routing,
});
