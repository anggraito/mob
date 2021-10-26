import constants from '../../../config/constants'

const actionsReducer = {}

actionsReducer.set_list_produk = (data, val) => ({
  type: constants.LIST_PRODUCT,
  payload: {
    data, val
  }
})

export default actionsReducer;