
 import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducerFunc} from './reducers';

const Reducer = combineReducers({default:reducerFunc})

const store = createStore(Reducer);

export {store}