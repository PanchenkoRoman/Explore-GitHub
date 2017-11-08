import { combineReducers } from 'redux';
import reposReducer from './reposReducer';

const rootReducer = combineReducers({
  data: reposReducer,
});

export default rootReducer;