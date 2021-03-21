import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

export const GET_RANDOM_FACT_REQUEST = "GET_RANDOM_FACT_REQUEST";
export const GET_RANDOM_FACT_SUCCESS = "GET_RANDOM_FACT_SUCCESS";
export const GET_RANDOM_FACT_FAILURE = "GET_RANDOM_FACT_FAILURE";
export const FACT_SELECTED = "FACT_SELECTED";

export const factBoardActions = {
  getRandomFact: () => {
    return {
      type: GET_RANDOM_FACT_REQUEST,
    };
  },
  getRandomFactSuccess: (results) => ({
    type: GET_RANDOM_FACT_SUCCESS,
    results,
  }),
  getRandomFactFailure: (error) => ({
    type: GET_RANDOM_FACT_FAILURE,
    error,
  }),
  selectFact: (selection) => {
    return {
      type: FACT_SELECTED,
      selection,
    };
  },
};

export const GET_RANDOM_FACT_URL = "https://api.chucknorris.io/jokes/random";

function* handleRandomRequest() {
  try {
    const result = yield call(axios, GET_RANDOM_FACT_URL);
    yield put(factBoardActions.getRandomFactSuccess(result.data));
  } catch (err) {
    yield put(factBoardActions.getRandomFactFailure(err.response.data.message || "something went wrong"));
  }
}

function* watchRandomRequest() {
  yield takeLatest(GET_RANDOM_FACT_REQUEST, handleRandomRequest);
}

export function* factBoardSaga() {
  yield all([watchRandomRequest()]);
}

const initialState = {
  isLoading: false,
  error: "",
  randomFact: false,
  previousSearches: [],
};

export const factBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_FACT_REQUEST:
      return { ...state, error: "", isLoading: true };

    case GET_RANDOM_FACT_SUCCESS:
      return { ...state, error: "", isLoading: false, randomFact: action.results };

    case GET_RANDOM_FACT_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    case FACT_SELECTED:
      const newFact = action.selection;
      // check for ID
      const filteredArr = state.previousSearches.filter((fact) => fact.id !== newFact.id);
      // latest first
      filteredArr.unshift(newFact);
      return {
        ...state,
        isLoading: false,
        previousSearches: filteredArr,
      };
    default:
      return state;
  }
};
