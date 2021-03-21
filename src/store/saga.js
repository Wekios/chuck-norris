import { all } from "redux-saga/effects";
import { factRootSaga } from "features/SingleFact";
import { searchRootSaga } from "features/FactSearch";
import { factBoardSaga } from "features/FactBoard";

export default function* rootSaga() {
  yield all([factRootSaga(), searchRootSaga(), factBoardSaga()]);
}
