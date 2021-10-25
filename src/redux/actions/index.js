import seller from './actionAPI/seller'
import sellerRdx from './actionRedux/seller'
// import seller from '../actionsReducer/seller'


export default action = {
  sellerAPI: seller,
  sellerRdx: sellerRdx
  // productRdx: productRedux.actionReducer
}
console.log('acc', action)
