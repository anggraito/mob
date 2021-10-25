// import { persistStore, persistCombineReducers } from 'redux-persist'
import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../redux/reducers'

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares) // applyMiddleware(thunkMiddleware)

  const composedEnhancers = compose(middlewareEnhancer)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}