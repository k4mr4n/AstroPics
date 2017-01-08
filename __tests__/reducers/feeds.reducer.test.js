import reducer from '../../reducers/feeds.reducer'
import Actions from '../../actions/feeds.actions'
import Immutable from 'immutable'

describe('Feeds Reducer tests', () => {
  it('should set feeds', () => {
    const feeds = { photos: [{a: 1}, {a: 2}] }
    const state = reducer(undefined, Actions.set(feeds))
    expect(state.get('feeds')).toEqual(Immutable.fromJS(feeds.photos))
  })
})
