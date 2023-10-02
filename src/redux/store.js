import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import get_api_data from './reducer/get_api_data';

const rootReducer = combineReducers({
  get_api_data,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
