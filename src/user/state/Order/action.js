import { api } from "../../../config/apiConfig";
import {
  CANCEL_ORDER_FAILURE,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  CONFIRM_ORDER_FAILURE,
  CONFIRM_ORDER_REQUEST,
  CONFIRM_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELIVERED_ORDER_FAILURE,
  DELIVERED_ORDER_REQUEST,
  DELIVERED_ORDER_SUCCESS,
  GET_ALL_ORDERS_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_HISTORY_FAILURE,
  GET_ORDER_HISTORY_REQUEST,
  GET_ORDER_HISTORY_SUCCESS,
  OUT_FOR_DELIVERY_ORDER_FAILURE,
  OUT_FOR_DELIVERY_ORDER_REQUEST,
  OUT_FOR_DELIVERY_ORDER_SUCCESS,
  SHIPPED_ORDER_FAILURE,
  SHIPPED_ORDER_REQUEST,
  SHIPPED_ORDER_SUCCESS,
} from "./actionType";

//CREATE order
const createOrderRequest = () => ({ type: CREATE_ORDER_REQUEST });
const createOrderSuccess = (data) => ({
  type: CREATE_ORDER_SUCCESS,
  payload: data,
});
const createOrderFailure = (error) => ({
  type: CREATE_ORDER_FAILURE,
  payload: error,
});

//GET order by id
const getOrderByIdRequest = () => ({ type: GET_ORDER_BY_ID_REQUEST });
const getOrderByIdSuccess = (data) => ({
  type: GET_ORDER_BY_ID_SUCCESS,
  payload: data,
});
const getOrderByIdFailure = (error) => ({
  type: GET_ORDER_BY_ID_FAILURE,
  payload: error,
});

//GET user order history
const getOrderHistoryRequest = () => ({ type: GET_ORDER_HISTORY_REQUEST });
const getOrderHistorySuccess = (data) => ({
  type: GET_ORDER_HISTORY_SUCCESS,
  payload: data,
});
const getOrderHistoryFailure = (error) => ({
  type: GET_ORDER_HISTORY_FAILURE,
  payload: error,
});

//GET all orders(ADMIN)
const getAllOrdersRequest = () => ({ type: GET_ALL_ORDERS_REQUEST });
const getAllOrdersSuccess = (data) => ({
  type: GET_ALL_ORDERS_SUCCESS,
  payload: data,
});
const getAllOrdersFailure = (error) => ({
  type: GET_ALL_ORDERS_FAILURE,
  payload: error,
});

//CONFIRM order(ADMIN)
const confirmOrderRequest = () => ({ type: CONFIRM_ORDER_REQUEST });
const confirmOrderSuccess = (data) => ({
  type: CONFIRM_ORDER_SUCCESS,
  payload: data,
});
const confirmOrderFailure = (error) => ({
  type: CONFIRM_ORDER_FAILURE,
  payload: error,
});

//CANCEL order(ADMIN)
const cancelOrderRequest = () => ({ type: CANCEL_ORDER_REQUEST });
const cancelOrderSuccess = (data) => ({
  type: CANCEL_ORDER_SUCCESS,
  payload: data,
});
const cancelOrderFailure = (error) => ({
  type: CANCEL_ORDER_FAILURE,
  payload: error,
});

//SHIPPED order(ADMIN)
const shippedOrderRequest = () => ({ type: SHIPPED_ORDER_REQUEST });
const shippedOrderSuccess = (data) => ({
  type: SHIPPED_ORDER_SUCCESS,
  payload: data,
});
const shippedOrderFailure = (error) => ({
  type: SHIPPED_ORDER_FAILURE,
  payload: error,
});

//MARK DELIVERED order(ADMIN)
const deliveredOrderRequest = () => ({ type: DELIVERED_ORDER_REQUEST });
const deliveredOrderSuccess = (data) => ({
  type: DELIVERED_ORDER_SUCCESS,
  payload: data,
});
const deliveredOrderFailure = (error) => ({
  type: DELIVERED_ORDER_FAILURE,
  payload: error,
});

//MARK OUT FOR DELIVERY order(ADMIN)
const outForDeliveryOrderRequest = () => ({
  type: OUT_FOR_DELIVERY_ORDER_REQUEST,
});
const outForDeliveryOrderSuccess = (data) => ({
  type: OUT_FOR_DELIVERY_ORDER_SUCCESS,
  payload: data,
});
const outForDeliveryOrderFailure = (error) => ({
  type: OUT_FOR_DELIVERY_ORDER_FAILURE,
  payload: error,
});

//DELETE order(ADMIN)
const deleteOrderRequest = () => ({ type: DELETE_ORDER_REQUEST });
const deleteOrderSuccess = (data) => ({
  type: DELETE_ORDER_SUCCESS,
  payload: data,
});
const deleteOrderFailure = (error) => ({
  type: DELETE_ORDER_FAILURE,
  payload: error,
});

//USER Functions
//create order
export const createOrder = (reqData) => async (dispatch) => {
  dispatch(createOrderRequest());
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
//get order by id
export const getOrderById = (orderId) => async (dispatch) => {
  dispatch(getOrderByIdRequest());
  try {
    const { data } = await api.get(`/api/orders/${orderId}`);
    dispatch(getOrderByIdSuccess(data));
    console.log("getOrderById ", data);
  } catch (error) {
    dispatch(getOrderByIdFailure(error));
  }
};
//get user order history
export const getOrderHistory = () => async (dispatch) => {
  dispatch(getOrderHistoryRequest());
  try {
    const { data } = await api.get("api/orders/history/user");
    console.log("User order history", data);
    dispatch(getOrderHistorySuccess(data));
  } catch (error) {
    dispatch(getOrderHistoryFailure(error));
  }
};

//ADMIN Functions
//GET all orders
export const getAllOrders = () => async (dispatch) => {
  dispatch(getAllOrdersRequest());
  try {
    const { data } = await api.get("/api/orders/all");
    dispatch(getAllOrdersSuccess(data));
    console.log("All orders", data);
  } catch (error) {
    dispatch(getAllOrdersFailure(error));
  }
};

//CONFIRM order
export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch(confirmOrderRequest());
  try {
    const { data } = await api.put(`/api/orders/${orderId}/confirm`);
    console.log("order confirmed", data);
    dispatch(confirmOrderSuccess(data));
  } catch (error) {
    dispatch(confirmOrderFailure(error));
  }
};

//CANCEL order
export const cancelOrder = (orderId) => async (dispatch) => {
  dispatch(cancelOrderRequest());
  try {
    const { data } = await api.put(`/api/orders/${orderId}/cancel`);
    console.log("order cancelled", data);
    dispatch(cancelOrderSuccess(data));
  } catch (error) {
    dispatch(cancelOrderFailure(error));
  }
};

//SHIPP order
export const shippOrder = (orderId) => async (dispatch) => {
  dispatch(shippedOrderRequest());
  try {
    const { data } = await api.put(`/api/orders/${orderId}/mark-shipped`);
    console.log("order shipped", data);
    dispatch(shippedOrderSuccess(data));
  } catch (error) {
    dispatch(shippedOrderFailure(error));
  }
};

//MARK OUT FOR DELIVERY order
export const markAsOutForDelivery = (orderId) => async (dispatch) => {
  dispatch(outForDeliveryOrderRequest());
  try {
    const { data } = await api.put(
      `/api/orders/${orderId}/mark-out-for=delivery`
    );
    console.log("order out for delivery", data);
    dispatch(outForDeliveryOrderSuccess(data));
  } catch (error) {
    dispatch(outForDeliveryOrderFailure(error));
  }
};

//DELIVER order
export const deliverOrder = (orderId) => async (dispatch) => {
  dispatch(deliveredOrderRequest());
  try {
    const { data } = await api.put(`/api/orders/${orderId}/deliver`);
    console.log("order delivered", data);
    dispatch(deliveredOrderSuccess(data));
  } catch (error) {
    dispatch(deliveredOrderFailure(error));
  }
};

//DELETE order
export const deleteOrder = (orderId) => async (dispatch) => {
  dispatch(deleteOrderRequest());
  try {
    const { data } = await api.delete(`/api/orders/${orderId}`);
    console.log("order deleted", data);
    dispatch(deleteOrderSuccess(data));
  } catch (error) {
    dispatch(deleteOrderFailure(error));
  }
};
