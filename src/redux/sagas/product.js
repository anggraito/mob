
import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import constants from '../../config/constants'

export function* fetchListProduct() {
  yield takeEvery(constants.LIST_PRODUCT, sagaListProduk)
}

export function* sagaListProduk() {
  try {
    const response = yield call(axios.get, `${constants.URL}`)
    yield put({type: constants.LIST_PRODUCT_SUCCESS, payload: response.data})
  } catch (err) {
    const error = err.response.data
    yield put({type: constants.LIST_PRODUCT_FAILURE})
  }
}