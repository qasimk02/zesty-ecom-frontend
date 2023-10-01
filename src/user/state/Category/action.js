import { api } from "../../../config/apiConfig";
import {
  GET_CATEGORY_BY_LEVEL_REQUEST,
  GET_CATEGORY_BY_LEVEL_SUCCESS,
} from "./actionTye";

const getCategoryByLevelRequest = () => ({
  type: GET_CATEGORY_BY_LEVEL_REQUEST,
});
const getCategoryByLevelSuccess = (data) => ({
  type: GET_CATEGORY_BY_LEVEL_SUCCESS,
  payload: data,
});
const getCategoryByLevelFailure = (error) => ({
  type: getCategoryByLevelFailure,
  payload: error,
});

//get category by level
export const getCategoryByLevel = (level) => async (dispatch) => {
  dispatch(getCategoryByLevelRequest);
  try {
    const { data } = await api.get(`/api/categories/level/${level}`);
    console.log("category level", data);
    dispatch(getCategoryByLevelSuccess(data));
  } catch (error) {
    dispatch(getCategoryByLevelFailure(error));
  }
};
