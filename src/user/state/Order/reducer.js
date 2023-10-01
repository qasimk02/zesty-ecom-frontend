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

const initialState = {
  orderItems: [],
  order: null,
  orderHistory: [],
  allOrders: [],
  confirmedOrder: null,
  cancelledOrder: null,
  shippedOrder: null,
  deliveredOrder: null,
  deletedOrder: null,
  outForDeliveryOrder: null,
  error: null,
  loading: true,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    //create order
    case CREATE_ORDER_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_ORDER_SUCCESS:
      return { ...state, success: true, laoding: false, order: action.payload };
    case CREATE_ORDER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    //get order by id
    case GET_ORDER_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
        orderItems: action.payload.orderItems,
      };
    case GET_ORDER_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };

    //get user order history
    case GET_ORDER_HISTORY_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ORDER_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orderHistory: action.payload,
      };
    case GET_ORDER_HISTORY_FAILURE:
      return { ...state, loading: false, error: action.payload };

    //ADMIN
    //get all orders,confirm,cancel,shipp,deliver request
    case GET_ALL_ORDERS_REQUEST:
    case CONFIRM_ORDER_REQUEST:
    case DELIVERED_ORDER_REQUEST:
    case CANCEL_ORDER_REQUEST:
    case OUT_FOR_DELIVERY_ORDER_REQUEST:
    case SHIPPED_ORDER_REQUEST:
    case DELETE_ORDER_REQUEST:
      return { ...state, loading: true, error: null };

    //get all orders,confirm,shipped,cancel and delivered success
    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        allOrders: action.payload,
      };
    case CONFIRM_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        confirmedOrder: action.payload,
      };
    case SHIPPED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        shippedOrder: action.payload,
      };
    case CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cancelledOrder: action.payload,
      };
    case OUT_FOR_DELIVERY_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        outForDeliveryOrder: action.payload,
      };
    case DELIVERED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deliveredOrder: action.payload,
      };
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deletedOrder: action.payload,
      };
    //get all orders,confirm,shipped,cancel and delivered failure
    case GET_ALL_ORDERS_FAILURE:
    case CONFIRM_ORDER_FAILURE:
    case SHIPPED_ORDER_FAILURE:
    case CANCEL_ORDER_FAILURE:
    case OUT_FOR_DELIVERY_ORDER_FAILURE:
    case DELIVERED_ORDER_FAILURE:
    case DELETE_ORDER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
