import { combineReducers } from 'redux'
import useCartReducer from './cart/cartReducer'

const rootReducer = combineReducers({ useCartReducer })

export default rootReducer