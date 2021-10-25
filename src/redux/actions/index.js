import seller from './actionAPI/seller'
import sellerRdx from './actionRedux/seller'
// import seller from '../actionsReducer/seller'

export default action = {
  sellerAPI: seller.actionsAPI,
  sellerRdx: sellerRdx.actionReducer
  // productRdx: productRedux.actionReducer
}
