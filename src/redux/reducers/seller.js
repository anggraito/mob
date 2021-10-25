import constants from "../../config/constants"

const initialState = {
  data: []
}

export default sellerReducer = (state=initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case constants.LIST_SELLER:
      return { ...state, data: [...state.data, payload] }
    default:
      return state
  }
}