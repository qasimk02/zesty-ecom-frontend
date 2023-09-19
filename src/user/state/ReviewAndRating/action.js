import { api } from "../../../config/apiConfig";
import {
  FIND_RATINGS_BY_PRODUCT_FAILURE,
  FIND_RATINGS_BY_PRODUCT_REQUEST,
  FIND_RATINGS_BY_PRODUCT_SUCCESS,
  FIND_REVIEWS_BY_PRODUCT_FAILURE,
  FIND_REVIEWS_BY_PRODUCT_REQUEST,
  FIND_REVIEWS_BY_PRODUCT_SUCCESS,
} from "./actionType";

//GET ALL REVIEWS
const findReviewsRequest = () => ({ type: FIND_REVIEWS_BY_PRODUCT_REQUEST });
const findReviewsSuccess = (data) => ({
  type: FIND_REVIEWS_BY_PRODUCT_SUCCESS,
  payload: data,
});
const findReviewsFailure = (error) => ({
  type: FIND_REVIEWS_BY_PRODUCT_FAILURE,
  payload: error,
});

//GET ALL RATINGS
const findRatingsRequest = () => ({ type: FIND_RATINGS_BY_PRODUCT_REQUEST });
const findRatingsSuccess = (data) => ({
  type: FIND_RATINGS_BY_PRODUCT_SUCCESS,
  payload: data,
});
const findRatingsFailure = (error) => ({
  type: FIND_RATINGS_BY_PRODUCT_FAILURE,
  payload: error,
});

//FIND ALL RATINGS
export const findRatings = (pId) => async (dispatch) => {
  dispatch(findRatingsRequest);
  try {
    const { data } = await api.get(`/api/rating/${pId}`);
    dispatch(findRatingsSuccess(data));
    console.log(data);
  } catch (error) {
    dispatch(findRatingsFailure(error));
  }
};

//FIND ALL REVIEWS
export const findReviews = (pId) => async (dispatch) => {
  dispatch(findReviewsRequest);
  try {
    const { data } = await api.get(`/api/review/${pId}`);
    dispatch(findReviewsSuccess(data));
    console.log(data);
  } catch (error) {
    dispatch(findReviewsFailure(error));
  }
};
