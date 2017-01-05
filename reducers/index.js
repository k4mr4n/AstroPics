import { combineReducers } from 'redux'
import configureStore from './createStore'
import rootSaga from '../sagas/'

/* ======= Reducers ========== */
import user from './user.reducer'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    user
  })

  return configureStore(rootReducer, rootSaga)
}
