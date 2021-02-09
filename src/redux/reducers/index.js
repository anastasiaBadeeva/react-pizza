import { combineReducers } from 'redux';
import pizza from './pizza';
import filter from './filters';
import cart from './cart';

const rootReducer = combineReducers({
  pizza,
  filter,
  cart,
});

export default rootReducer;
