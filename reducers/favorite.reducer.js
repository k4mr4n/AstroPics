import {createReducer} from 'reduxsauce'
import Immutable from 'immutable'
import {FavoriteTypes as Types} from '../actions/favorite.actions'

export const INITIAL_STATE = Immutable.fromJS({
  list: []
})

export const set = (state, {photo}) => {
  const list = state.get('list')
  let isItThere = false
  list.map(l => { if (l.id === photo.id) isItThere = true })
  if (isItThere) return state

  return state.set('list', list.push(photo))
}
export const unset = (state, {id}) => {
  const list = state.get('list').filter(l => l.id !== id)
  return state.set('list', list)
}

const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_FAVORITE]: set,
  [Types.UNSET_FAVORITE]: unset
})

export default reducer
