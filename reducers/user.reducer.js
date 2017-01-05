import {createReducer} from 'reduxsauce'
import Immutable from 'immutable'
import {UserTypes as Types} from '../actions/user.actions'
import { requestStarted, requestCompleted } from './shared.reducer.js'

export const INITIAL_STATE = Immutable.fromJS({
  fetching: false,
  name: 'guest',
  isLoggedIn: false
})

export const setName = (state, {name}) => state.set('name', name)
export const setLoggedIn = (state, {isLoggedIn}) => state.set('isLoggedIn', isLoggedIn)
export const clear = (state) => INITIAL_STATE

const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_NAME]: setName,
  [Types.SET_LOGGED_IN]: setLoggedIn,
  [Types.CLEAR]: clear,
  [Types.REQUEST_STARTED]: requestStarted,
  [Types.REQUEST_COMPLETED]: requestCompleted
})

export default reducer
