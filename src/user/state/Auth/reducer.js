import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwtToken: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //request
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    //success
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        jwtToken: action.payload,
      };
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, error: null, user: action.payload };

    //failure
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    //logout
    case LOGOUT:
      return { initialState };

    default:
      return state;
  }
};
