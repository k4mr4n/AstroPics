import { createActions } from 'reduxsauce'
import sharedActions from './shared.actions'

const { Types, Creators } = createActions({
  fetch: ['filter'],
  set: ['feeds'],
  ...sharedActions
})

export const FeedsTypes = Types
export default Creators
