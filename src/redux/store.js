import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers/index.js';

const middleware = applyMiddleware();

export default createStore(reducer, middleware);