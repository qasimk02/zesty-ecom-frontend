import {
  GET_CATEGORY_BY_LEVEL_FAILURE,
  GET_CATEGORY_BY_LEVEL_REQUEST,
  GET_CATEGORY_BY_LEVEL_SUCCESS,
} from "./actionTye";

const initialState = {
  categories: [],
  error: null,
  loading: false,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_BY_LEVEL_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_CATEGORY_BY_LEVEL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        categories: action.payload,
      };

    case GET_CATEGORY_BY_LEVEL_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return initialState;
  }
};
