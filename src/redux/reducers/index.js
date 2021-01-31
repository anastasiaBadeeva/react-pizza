import { combineReducers } from 'redux';
import pizza from './pizza';
import filter from './filters';

const rootReducer = combineReducers({
  pizza,
  filter,
});

export default rootReducer;
