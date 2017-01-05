import { put } from 'redux-saga/effects'
import UserActions from '../actions/user.actions'

export function* completed () {
  yield put(UserActions.requestCompleted())
}

/**************
*** REQUEST ***
**************/

export function * login ({name}) {
  yield put(UserActions.requestStarted())
  yield loginSuccess(name)
  yield put(UserActions.requestCompleted())
}

/***************
*** RESPONSE ***
***************/

export function * loginSuccess (name) {
  yield put(UserActions.setName(name))
  yield put(UserActions.setLoggedIn(true))
}
