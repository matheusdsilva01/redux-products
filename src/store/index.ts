import { combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { reducers } from './reducers';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//@ts-ignore
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__) || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))