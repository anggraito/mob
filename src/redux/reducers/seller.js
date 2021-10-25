import constants from "../../config/constants"

const initialState = {
  data: [],
  isLoading: false,
  success: false
}

export default sellerReducer = (state=initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case constants.LIST_SELLER:
      return { ...state , isLoading: true }
    case constants.LIST_SELLER_SUCCESS:
      return { ...state , data: state.data.push(payload), isLoading: false, success: true }
    case constants.LIST_SELLER_FAILURE:
      return { ...state , isLoading: false, success: false }
    default:
      return state
  }
}