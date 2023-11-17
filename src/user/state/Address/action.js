import { api } from "../../../config/apiConfig";
import {
  GET_ALL_ADDRESS_FAILURE,
  GET_ALL_ADDRESS_REQUEST,
  GET_ALL_ADDRESS_SUCCESS,
} from "./actionType";

//GET ALL ADDRESSESS
const getAllAddressRequest = () => ({ type: GET_ALL_ADDRESS_REQUEST });
const getAllAddressSuccess = (data) => ({
  type: GET_ALL_ADDRESS_SUCCESS,
  payload: data,
});
const getAllAddressFailure = (error) => ({
  type: GET_ALL_ADDRESS_FAILURE,
  payload: error,
});

//get all address
export const getAllAddress = () => async (dispatch) => {
  dispatch(getAllAddressRequest());
  try {
    const { data } = await api.get("/api/address");
    // console.log(data);
    dispatch(getAllAddressSuccess(data));
  } catch (error) {
    dispatch(getAllAddressFailure(error));
  }
};
