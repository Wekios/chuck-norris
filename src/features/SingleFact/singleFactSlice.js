import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

export const FACT_REQUEST = "FACT_REQUEST";
export const FACT_REQUEST_SUCCESS = "FACT_REQUEST_SUCCESS";
export const FACT_REQUEST_FAILURE = "FACT_REQUEST_FAILURE";

// ENDPOINT
export const FACT_BY_ID_URL = "https://api.chucknorris.io/jokes/";

export const factActions = {
  fetchById: (id) => ({
    type: FACT_REQUEST,
    payload: id,
  }),
  fetchByIdSuccess: (data) => ({
    type: FACT_REQUEST_SUCCESS,
    payload: data,
  }),
  fetchByIdFailure: (error) => ({
    type: FACT_REQUEST_FAILURE,
    payload: error,
  }),
};

function* handleFetchById({ payload: id }) {
  try {
    const result = yield call(axios, FACT_BY_ID_URL + id);
    yield put(factActions.fetchByIdSuccess(result.data));
  } catch (err) {
    console.log(err);
    yield put(factActions.fetchByIdError(err));
  }
}

function* watchFetchById() {
  yield takeLatest(FACT_REQUEST, handleFetchById);
}

export function* factRootSaga() {
  yield all([watchFetchById()]);
}

const initialState = {
  isLoading: false,
  error: "",
  data: {},
};

export const factReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACT_REQUEST:
      return { ...state, error: "", isLoading: true };

    case FACT_REQUEST_SUCCESS:
      return { ...state, error: "", isLoading: false, data: action.payload };

    case FACT_REQUEST_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
