import axios from 'axios';
import constants from '../../../config/constants'

const actionsAPI = {}

actionsAPI.post_seller = (body) => {
  return async () => {
    try {
      let url = `${constants.URL}/addSeller`
      const res = await axios.post(url, body, {
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

export default actionsAPI