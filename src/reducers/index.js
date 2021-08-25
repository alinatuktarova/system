import { combineReducers } from 'redux';
import menuState from './menuReducer';
import valuesState from './valuesReducer';

const rootReducers = () => combineReducers({ menuState, valuesState })

export default rootReducers;
