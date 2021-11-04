import axios from 'axios';
import constants from '../../../config/constants'

const actionsAPI = {}

actionsAPI.post_seller = (body) => {
  return async () => {
    try {
      let url = `${constants.URL}/addSeller2`
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

actionsAPI.get_list_seller = () => {
  return async () => {
    try {
      let url = `${constants.URL}/getAllSeller`
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

actionsAPI.get_detail_seller = (idSeller) => {
  return async () => {
    try {
      let url = `${constants.URL}/getSellerById?seller_id=${idSeller}`
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

export default actionsAPI