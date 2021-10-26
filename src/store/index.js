import { persistStore, persistReducer } from 'redux-persist'
import { applyMiddleware, compose, createStore } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../redux/reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}


const middlewareEnhancer = applyMiddleware(thunkMiddleware) // applyMiddleware(thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default (preloadState) => {

  const store = createStore(persistedReducer, preloadState, composedEnhancers)
  let persistor = persistStore(store)
  return { store, persistor }
}