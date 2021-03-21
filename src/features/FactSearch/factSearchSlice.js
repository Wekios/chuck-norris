import axios from "axios";
import { all, call, put, takeLatest, delay } from "redux-saga/effects";

export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_REQUEST_SUCCESS = "SEARCH_REQUEST_SUCCESS";
export const SEARCH_REQUEST_FAILURE = "SEARCH_REQUEST_FAILURE";

export const searchActions = {
  search: (query) => ({
    type: SEARCH_REQUEST,
    query,
  }),
  searchSuccess: (results) => ({
    type: SEARCH_REQUEST_SUCCESS,
    results,
  }),
  searchFailure: (error) => ({
    type: SEARCH_REQUEST_FAILURE,
    error,
  }),
};

export const SEARCH_FACT_URL = "https://api.chucknorris.io/jokes/search?query=";

function* handleInput({ query }) {
  yield delay(500);
  try {
    const result = yield call(axios, SEARCH_FACT_URL + query);
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

const initialState = {
  isLoading: false,
  error: "",
  data: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return { ...state, error: "", isLoading: true };

    case SEARCH_REQUEST_SUCCESS:
      return { ...state, error: "", isLoading: false, data: action.results };

    case SEARCH_REQUEST_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    default:
      return state;
  }
};
