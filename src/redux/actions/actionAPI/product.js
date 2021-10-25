import axios from 'axios';
import constants from '../../../config/constants'

const actionsAPI = {}

actionsAPI.get_list_product = (query) => {
  return async () => {
    try {
      let url = `${constants.URL}${query}`
      const res = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}

// actionsAPI.post_item_product = (body) => {
//   return async () => {
//     try {
//       let url = `${constants.URL}/addSeller`
//       const res = await axios.post(url, body, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       return res.data
//     } catch (err) {
//       if (err.response) return err.response.data
//     }
//   }
// }

export default actionsAPI