import constants from '../../../config/constants'

const actionsReducer = {}

actionsReducer.set_list_seller = (data) => ({
  type: constants.LIST_SELLER,
  payload: data
})

export default actionsReducer;