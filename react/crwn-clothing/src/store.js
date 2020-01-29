import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import products from './data/products';

const initialState = { products };

const store = createStore(rootReducer, initialState);

export default store;
