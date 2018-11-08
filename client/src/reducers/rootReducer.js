import { combineReducers } from 'redux'

import products from './products_reducer'
import session from './sessionReducer'

const rootReducer = combineReducers({
    products, 
    session
})

export default rootReducer;