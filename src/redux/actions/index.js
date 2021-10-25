import seller from './actionAPI/seller'
import sellerRdx from './actionRedux/seller'
import product from './actionAPI/product'
import productRdx from './actionRedux/product'
// import seller from '../actionsReducer/seller'


export default action = {
  sellerAPI: seller,
  sellerRdx: sellerRdx,
  productAPI: product,
  productRdx: productRdx
}
