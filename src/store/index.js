import {applyMiddleware, createStore, compose} from 'redux' 
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../redux/reducers'
import rootSaga from '../sagas'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware, logger, thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = {...createStore(rootReducer, preloadedState, composedEnhancers), runSaga: sagaMiddleware.run}
  store.runSaga(rootSaga)

  return store
}