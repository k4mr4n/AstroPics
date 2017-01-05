import reducer, {INITIAL_STATE} from '../../reducers/user.reducer'
import Actions from '../../actions/user.actions'

describe('User Reducer tests', () => {
  it('should clear user store', () => {
    const name = 'kamran'
    const addState = reducer(undefined, Actions.setName(name))
    expect(addState.get('name')).toBe(name)
    const state = reducer(addState, Actions.clear())
    expect(state.get('name')).toBe(INITIAL_STATE.get('name'))
    expect(state.get('isLoggedIn')).toBe(false)
  })

  it('should set name for user', () => {
    const name = 'kamran'
    const state = reducer(undefined, Actions.setName(name))
    expect(state.get('name')).toBe(name)
  })

  it('should set user logged in', () => {
    const state = reducer(undefined, Actions.setLoggedIn(true))
    expect(state.get('isLoggedIn')).toBe(true)
  })
})
