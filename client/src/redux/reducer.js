import { combineReducers } from 'redux';
import authUser from './reducers/authUser';
import movie from './reducers/movie';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  movie,
  authUser,
  router: routerReducer
});
