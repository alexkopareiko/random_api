import {combineReducers} from 'redux';
import box from './box';

const allReducers = combineReducers ({
  box: box
});

export default allReducers
