import axios from "axios";
import { all, call, put, takeLatest, delay } from "redux-saga/effects";
import { searchActions, SEARCH_REQUEST } from "./search-actions";

export const API_CHUCK_POINT = "https://api.chucknorris.io/jokes/search?query=";

function* handleInput({ query }) {
  yield delay(500);
  try {
    const result = yield call(axios, API_CHUCK_POINT + query);
    const data = result.data.result.slice(0, 6);
    yield put(searchActions.searchSuccess(data));
  } catch (err) {
    yield put(searchActions.searchFailure(err.response.data.message || "something went wrong"));
  }
}

function* watchInput() {
  yield takeLatest(SEARCH_REQUEST, handleInput);
}

export function* searchRootSaga() {
  yield all([watchInput()]);
}
