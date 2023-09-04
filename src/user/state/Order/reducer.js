import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./actionType";

const initialState = {
  orderItems: [],
  order: null,
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

    default:
      return state;
  }
};
