import { all } from 'redux-saga/effects'
import { fetchListProduct } from './product'

export default function* rootSaga() {
  yield all([
    fetchListProduct(),
  ])
}