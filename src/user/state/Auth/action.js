import axios from "axios";
import { API_BASE_URL } from "../../../config/apiConfig";
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

//register
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

//login
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

//get user
const getUserDataRequest = () => ({ type: GET_USER_REQUEST });
const getUserDataSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});
const getUserDataFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: error,
});

//methods
export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwtToken) {
      localStorage.setItem("jwtToken", user.jwtToken);
    }
    dispatch(registerSuccess(user.jwtToken));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const login = (loginData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);
    const user = response.data;
    if (user.jwtToken) {
      localStorage.setItem("jwtToken", user.jwtToken);
    }
    dispatch(loginSuccess(user.jwtToken));
    console.log("login action ", user);
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const getUser = (jwtToken) => async (dispatch) => {
  dispatch(getUserDataRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const user = response.data;
    dispatch(getUserDataSuccess(user));
    console.log("getUser action ", user);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Handle 401 error (e.g., redirect to login page)
      // You can also refresh the token here if needed
      // window.location.href = "/login";
    } else {
      dispatch(getUserDataFailure(error));
    }
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear();
};
