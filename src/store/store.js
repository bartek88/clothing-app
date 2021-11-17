import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../redux/root-reducer';

const middlewares = [logger];
const composeEnhancer = compose(
	applyMiddleware(...middlewares),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, undefined, composeEnhancer);

export default store;
