import { combineReducers } from 'redux'
import configureStore from './createStore'
import rootSaga from '../sagas/'

/* ======= Reducers ========== */
import user from './user.reducer'
import feeds from './feeds.reducer'
import favorites from './favorite.reducer'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    user,
    feeds,
    favorites
  })

  return configureStore(rootReducer, rootSaga)
}
