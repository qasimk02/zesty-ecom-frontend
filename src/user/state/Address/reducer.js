import {
  GET_ALL_ADDRESS_FAILURE,
  GET_ALL_ADDRESS_REQUEST,
  GET_ALL_ADDRESS_SUCCESS,
} from "./actionType";

const initialState = {
  addressess: [],
  isLoading: false,
  error: null,
};

export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    //request
    case GET_ALL_ADDRESS_REQUEST:
      return { ...state, isLoading: true, error: null };

    //success
    case GET_ALL_ADDRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addressess: action.payload,
        error: null,
      };

    //failure
    case GET_ALL_ADDRESS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return initialState;
  }
};
