import { combineReducers } from 'redux';
import menuState from './menuReducer';

const rootReducers = () => combineReducers({ menuState })

export default rootReducers;
