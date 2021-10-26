import constants from '../../../config/constants'

const actionsReducer = {}

actionsReducer.set_list_produk = (data) => ({
  type: constants.LIST_PRODUCT,
  payload: data
})

export default actionsReducer;