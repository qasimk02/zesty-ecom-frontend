import { api } from "../../../config/apiConfig";
import {
  CREATE_PAYMENT_FAILURE,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
} from "./actionType";

const createPaymentRequest = () => ({ type: CREATE_PAYMENT_REQUEST });
const createPaymentSuccess = (data) => ({
  type: CREATE_PAYMENT_SUCCESS,
  payload: data,
});
const createPaymentFailure = (error) => ({
  type: CREATE_PAYMENT_FAILURE,
  payload: error,
});

const updatePaymentRequest = () => ({ type: UPDATE_PAYMENT_REQUEST });
const updatePaymentSuccess = (data) => ({
  type: UPDATE_PAYMENT_SUCCESS,
  payload: data,
});
const updatePaymentFailure = (error) => ({
  type: UPDATE_PAYMENT_FAILURE,
  payload: error,
});

//creating payment
export const createPayment = (orderId) => async (dispatch) => {
  dispatch(createPaymentRequest);
  try {
    const { data } = await api.post(`/api/payments/${orderId}`);
    if (data.paymentLinkUrl) {
      window.location.href = data.paymentLinkUrl;
    }
    dispatch(createPaymentSuccess(data));
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Handle 401 error (e.g., redirect to login page)
      // You can also refresh the token here if needed
      window.location.href = "/login";
    } else {
      dispatch(createPaymentFailure(error));
    }
  }
};

// update payment
export const updatePayment = (reqData) => async (dispatch) => {
  dispatch(updatePaymentRequest);
  try {
    const { data } = api.get(
      `/api/payments/update?payment_id=${reqData.paymentId}&payment_link_id=${reqData.paymentLinkId}&payment_status=${reqData.paymentStatus}&order_id=${reqData.orderId}`
    );
    dispatch(updatePaymentSuccess(data));
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Handle 401 error (e.g., redirect to login page)
      // You can also refresh the token here if needed
      console.log("entered 1");
      //   window.location.href = "/login";
    } else {
      console.log("entered 2");
      dispatch(updatePaymentFailure(error));
    }
  }
};
