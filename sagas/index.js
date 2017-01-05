import {takeLatest} from 'redux-saga/effects'

/* ------------- Types ------------- */
import { UserTypes } from '../actions/user.actions'

/* ------------- Sagas ------------- */
import { login } from './user.sagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    takeLatest(UserTypes.LOGIN, login)
  ]
}
