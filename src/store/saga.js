import { all } from "redux-saga/effects";
import { factRootSaga } from "features/SingleFact/singleFactSlice";
import { searchRootSaga } from "./search/search-saga";

export default function* rootSaga() {
  yield all([factRootSaga(), searchRootSaga()]);
}
