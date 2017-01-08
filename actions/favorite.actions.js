import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setFavorite: ['photo'],
  unsetFavorite: ['id']
})

export const FavoriteTypes = Types
export default Creators
