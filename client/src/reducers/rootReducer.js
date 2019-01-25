import { combineReducers } from 'redux'

import products from './products_reducer'
import session from './sessionReducer'
import aboutInfo from './adminInfoReducer'

const rootReducer = combineReducers({
    products, 
    session,
    aboutInfo
})

export default rootReducer;