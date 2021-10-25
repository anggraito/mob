import constants from "../../config/constants"

const initialState = {
  data: [],
  isLoading: false,
  isFound: false
}

export default productReducer = (state=initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case constants.LIST_PRODUCT:
      return { ...state , isLoading: true }
    case constants.LIST_PRODUCT_SUCCESS:
      return { ...state , data: payload, isLoading: false, isFound: true }
    case constants.LIST_PRODUCT_FAILURE:
      return { ...state , isLoading: false, isFound: false }
    default:
      return state
  }
}