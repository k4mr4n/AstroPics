import {takeLatest} from 'redux-saga/effects'

/* ------------- Types ------------- */
import { UserTypes } from '../actions/user.actions'
import { FeedsTypes } from '../actions/feeds.actions'

/* ------------- Sagas ------------- */
import { login } from './user.sagas'
import { fetchFeeds } from './feeds.sagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    takeLatest(UserTypes.LOGIN, login),
    takeLatest(FeedsTypes.FETCH, fetchFeeds)
  ]
}
