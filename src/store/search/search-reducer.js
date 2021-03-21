import { SEARCH_REQUEST, SEARCH_REQUEST_FAILURE, SEARCH_REQUEST_SUCCESS } from "./search-actions";

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
