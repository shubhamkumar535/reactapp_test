import setProductdata from '../feature/Product/productSlice';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  products: setProductdata,
})

export default rootReducer
