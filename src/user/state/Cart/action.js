import { api } from "../../../config/apiConfig";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./actionType";

//add Item to cart
const addItemToCartRequest = () => ({ type: ADD_ITEM_TO_CART_REQUEST });
const addItemToCartSuccess = (data) => ({
  type: ADD_ITEM_TO_CART_SUCCESS,
  payload: data,
});
const addItemToCartFailure = (error) => ({
  type: ADD_ITEM_TO_CART_FAILURE,
  payload: error,
});

//get cart
const getCartRequest = () => ({ type: GET_CART_REQUEST });
const getCartSuccess = (data) => ({ type: GET_CART_SUCCESS, payload: data });
const getCartFailure = (error) => ({ type: GET_CART_FAILURE, payload: error });

//update cart item
const updateCartItemRequest = () => ({ type: UPDATE_CART_ITEM_REQUEST });
const updateCartItemSuccess = (data) => ({
  type: UPDATE_CART_ITEM_SUCCESS,
  payload: data,
});
const updateCartItemFailure = (error) => ({
  type: UPDATE_CART_ITEM_FAILURE,
  payload: error,
});

//remove cart item
const removeCartItemRequest = () => ({ type: REMOVE_CART_ITEM_REQUEST });
const removeCartItemSuccess = (data) => ({
  type: REMOVE_CART_ITEM_SUCCESS,
  payload: data,
});
const removeCartItemFailure = (error) => ({
  type: REMOVE_CART_ITEM_FAILURE,
  payload: error,
});

//get cart
export const getCart = () => async (dispatch) => {
  dispatch(getCartRequest);
  try {
    const { data } = await api.get("/api/cart");
    dispatch(getCartSuccess(data));
  } catch (error) {
    dispatch(getCartFailure(error));
  }
};

//add item to cart
export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch(addItemToCartRequest);
  try {
    const { data } = await api.post("/api/cart", reqData);
    dispatch(addItemToCartSuccess(data));
  } catch (error) {
    dispatch(addItemToCartFailure(error));
  }
};

//update cart item
export const updateCartItem = (reqData) => async (dispatch) => {
  dispatch(updateCartItemRequest);
  try {
    const { data } = await api.post("/api/cart", reqData);
    dispatch(updateCartItemSuccess(data));
  } catch (error) {
    dispatch(updateCartItemFailure(error));
  }
};

//add item to cart
export const removeCartItem = (cartItemId) => async (dispatch) => {
  dispatch(removeCartItemRequest);
  try {
    const { data } = await api.delete(`/api/cart/${cartItemId}`);
    dispatch(removeCartItemSuccess(data));
  } catch (error) {
    dispatch(removeCartItemFailure(error));
  }
};
