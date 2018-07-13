import {combineReducers} from 'redux';
import userReducer from './userReducer';
import tickerReducer from './tickerReducer';

const rootReducer = combineReducers({userReducer, tickerReducer});

export default rootReducer;
