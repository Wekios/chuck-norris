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
