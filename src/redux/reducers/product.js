import constants from "../../config/constants"

const initialState = {
  data: [],
  successAdd: false
}

export default productReducer = (state=initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case constants.LIST_PRODUCT:
      return { ...state , data: payload.data, successAdd: payload.val }
    default:
      return state
  }
}