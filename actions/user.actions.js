import { createActions } from 'reduxsauce'
import sharedActions from './shared.actions'

const { Types, Creators } = createActions({
  setName: ['name'],
  clear: null,
  setLoggedIn: ['isLoggedIn'],
  login: ['name'],
  ...sharedActions
})

export const UserTypes = Types
export default Creators
