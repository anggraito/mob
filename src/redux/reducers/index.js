import {combineReducers} from 'redux' 

import productReducers from './product'
import sellerReducers from './seller'

export default rootReducer = combineReducers({
  product: productReducers,
  seller: sellerReducers
})

