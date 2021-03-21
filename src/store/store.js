import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./saga";
import { themeReducer } from "./theme";
import { factReducer } from "features/SingleFact";
import { searchReducer } from "./search/search-reducer";

const reducer = combineReducers({
  theme: themeReducer,
  search: searchReducer,
  fact: factReducer,
});

export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);
