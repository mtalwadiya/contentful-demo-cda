export const initialState = {
  loading: true,
  books: [],
  errorMessage: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_BOOKS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_BOOKS_SUCCESS":
      return {
        ...state,
        loading: false,
        books: action.payload
      };
    case "SEARCH_BOOKS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
