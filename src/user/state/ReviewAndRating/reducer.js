import {
  FIND_RATINGS_BY_PRODUCT_FAILURE,
  FIND_RATINGS_BY_PRODUCT_REQUEST,
  FIND_RATINGS_BY_PRODUCT_SUCCESS,
  FIND_REVIEWS_BY_PRODUCT_FAILURE,
  FIND_REVIEWS_BY_PRODUCT_REQUEST,
  FIND_REVIEWS_BY_PRODUCT_SUCCESS,
} from "./actionType";

const intialState = {
  reviews: [],
  ratings: null,
  loading: false,
  error: null,
};

export const reviewAndRatingReducer = (state = intialState, action) => {
  switch (action.type) {
    //request case
    case FIND_RATINGS_BY_PRODUCT_REQUEST:
    case FIND_REVIEWS_BY_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };

    //success case
    case FIND_RATINGS_BY_PRODUCT_SUCCESS:
      return { ...state, loading: false, error: null, ratings: action.payload };
    case FIND_REVIEWS_BY_PRODUCT_SUCCESS:
      return { ...state, loading: false, error: null, reviews: action.payload };

    //failure case
    case FIND_RATINGS_BY_PRODUCT_FAILURE:
    case FIND_REVIEWS_BY_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
