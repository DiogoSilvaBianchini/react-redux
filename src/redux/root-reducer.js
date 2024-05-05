import { combineReducers } from 'redux'
import useReducer from './user/reducer'
import useCartReducer from './cart/cartReducer'

const rootReducer = combineReducers({ useReducer, useCartReducer })

export default rootReducer