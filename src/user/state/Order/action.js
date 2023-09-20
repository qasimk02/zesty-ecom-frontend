import { api } from "../../../config/apiConfig";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_HISTORY_FAILURE,
  GET_ORDER_HISTORY_REQUEST,
  GET_ORDER_HISTORY_SUCCESS,
} from "./actionType";

const createOrderRequest = () => ({ type: CREATE_ORDER_REQUEST });
const createOrderSuccess = (data) => ({
  type: CREATE_ORDER_SUCCESS,
  payload: data,
});
const createOrderFailure = (error) => ({
  type: CREATE_ORDER_FAILURE,
  payload: error,
});

const getOrderByIdRequest = () => ({ type: GET_ORDER_BY_ID_REQUEST });
const getOrderByIdSuccess = (data) => ({
  type: GET_ORDER_BY_ID_SUCCESS,
  payload: data,
});
const getOrderByIdFailure = (error) => ({
  type: GET_ORDER_BY_ID_FAILURE,
  payload: error,
});

const getOrderHistoryRequest = () => ({ type: GET_ORDER_HISTORY_REQUEST });
const getOrderHistorySuccess = (data) => ({
  type: GET_ORDER_HISTORY_SUCCESS,
  payload: data,
});
const getOrderHistoryFailure = (error) => ({
  type: GET_ORDER_HISTORY_FAILURE,
  payload: error,
});

//create order
export const createOrder = (reqData) => async (dispatch) => {
  dispatch(createOrderRequest);
  try {
    const { data } = await api.post("/api/orders", reqData.address);
    if (data.orderId) {
      reqData.navigate({ search: `step=3&order_id=${data.orderId}` });
    }
    dispatch(createOrderSuccess(data));
    console.log("createOrder ", data);
  } catch (error) {
    dispatch(createOrderFailure(error));
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  dispatch(getOrderByIdRequest);
  try {
    const { data } = await api.get(`/api/orders/${orderId}`);
    dispatch(getOrderByIdSuccess(data));
    console.log("getOrderById ", data);
  } catch (error) {
    dispatch(getOrderByIdFailure(error));
  }
};

export const getOrderHistory = () => async (dispatch) => {};
