import {createReducer} from 'reduxsauce'
import Immutable from 'immutable'
import {FeedsTypes as Types} from '../actions/feeds.actions'
import { requestStarted, requestCompleted } from './shared.reducer.js'

export const INITIAL_STATE = Immutable.fromJS({
  fetching: false,
  feeds: []
})

export const set = (state, {feeds}) => state.set('feeds', Immutable.fromJS(feeds.photos.slice(0, 25)))

const reducer = createReducer(INITIAL_STATE, {
  [Types.SET]: set,
  [Types.REQUEST_STARTED]: requestStarted,
  [Types.REQUEST_COMPLETED]: requestCompleted
})

export default reducer
