import reducer from '../../reducers/favorite.reducer'
import Actions from '../../actions/favorite.actions'
import Immutable from 'immutable'

describe('Favorite Reducer tests', () => {
  it('should push a photo to list', () => {
    const photo = {a: 1, id: 100}
    const state = reducer(undefined, Actions.set(photo))
    const list = Immutable.fromJS([])
    expect(state.get('list')).toEqual(list.push(photo))
  })

  it('should unset a photo from array', () => {
    const addState = reducer(undefined, Actions.set({id: 1}))
    const _addState = reducer(addState, Actions.set({id: 2}))
    expect(_addState.get('list').count()).toBe(2)
    const state = reducer(_addState, Actions.unset(1))
    expect(state.get('list').count()).toBe(1)
    const list = Immutable.fromJS([])
    expect(state.get('list')).toEqual(list.push({id: 2}))
  })
})
