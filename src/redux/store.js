import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import get_api_data from './reducer/get_api_data';
import actions_reducer from './reducer/actions_reducer';

const rootReducer = combineReducers({
  get_api_data,
  actions_reducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
