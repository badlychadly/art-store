
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import products from './reducers/products_reducer'



const rootReducer = combineReducers({
    products
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export default createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
  );