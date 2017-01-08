import { put } from 'redux-saga/effects'
import FeedsActions from '../actions/feeds.actions'
import moment from 'moment'

export function* completed () {
  yield put(FeedsActions.requestCompleted())
}

/**************
*** REQUEST ***
**************/

export function * fetchFeeds (actions) {
  const { camera: __c, date: __d } = actions.filter
  yield put(FeedsActions.requestStarted())
  const API_KEY = 'JZ1t5zHETuoVSeDNo2BsNimnR039ljBiL5so4HXj'
  const CAMERA = __c === 'all' ? '' : `=${__c}`
  const DATE = moment(__d).format('YYYY-MM-DD')
  const URI = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${DATE}&api_key=${API_KEY}&camera${CAMERA}`
  const res = yield fetch(URI)
  const feeds = yield res.json()
  if (feeds.photos) yield fetchSuccess(feeds)
  // yield fetchSuccess([])
  yield put(FeedsActions.requestCompleted())
}

/***************
*** RESPONSE ***
***************/

export function * fetchSuccess (feeds) {
  yield put(FeedsActions.set(feeds))
}
